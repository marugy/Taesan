package com.ts.taesan.domain.transaction.service;

import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.transaction.api.dto.request.LoadTransactions;
import com.ts.taesan.domain.transaction.api.dto.request.ReceiptRequest;
import com.ts.taesan.domain.transaction.api.dto.response.*;
import com.ts.taesan.domain.transaction.entity.Receipt;
import com.ts.taesan.domain.transaction.entity.ReceiptList;
import com.ts.taesan.domain.transaction.entity.Transaction;
import com.ts.taesan.domain.transaction.repository.ReceiptRepository;
import com.ts.taesan.domain.transaction.repository.TransactionQRepository;
import com.ts.taesan.domain.transaction.repository.TransactionRepository;
import com.ts.taesan.domain.transaction.req.AIModelClient;
import com.ts.taesan.domain.transaction.req.CategoryResult;
import com.ts.taesan.domain.transaction.req.KakaoResult;
import com.ts.taesan.domain.transaction.req.TransactionsClient;
import com.ts.taesan.domain.transaction.service.dto.response.*;
import com.ts.taesan.global.openfeign.card.CardClient;
import com.ts.taesan.global.openfeign.card.dto.request.CardInfoRequest;
import com.ts.taesan.global.openfeign.card.dto.response.CardInfoResponse;
import com.ts.taesan.global.util.KakaoUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.MonthDay;
import java.time.YearMonth;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionQRepository qRepository;
    private final TransactionRepository transactionRepository;
    private final ReceiptRepository receiptRepository;
    private final MemberRepository memberRepository;
    private final TransactionsClient transactionsClient;
    private final CardClient cardClient;
    private final AIModelClient aiModelClient;
    private final KakaoUtil kakaoUtil;

    @Value("${org-code}")
    private String orgCode;

    public TransactionListResponse getTransactions(Long memberId, Long cardId, Integer cursor, Integer limit){
        Member member = memberRepository.findById(memberId).get();
        CardInfoRequest cardInfoRequest = CardInfoRequest.builder()
                .org_code(orgCode)
                .search_timestamp(new Date().getTime())
                .next_page(0L)
                .limit(500)
                .build();
        CardInfoResponse cardResponse = cardClient.getCardInfo(member.getMydataAccessToken(), getTranId(), getApiType(), cardId, cardInfoRequest).getBody();

        Card card = new Card(cardResponse.getCardId(), cardResponse.getCardNum(), cardResponse.getCompany(), cardResponse.getCardType());
        List<TransactionDTO> list = qRepository.findTransactionListByCardId(cardId, cursor, limit);
        TransactionListResponse response = new TransactionListResponse(cursor.toString(), card, limit.toString(), list);
        return response;
    }

    public TransactionResponse getTransactionDetail(Long transactionId){
        TransactionDTO transactionDTO = qRepository.findTransactionDetailByCardId(transactionId);
        RecentTransaction recentTransaction = qRepository.findRecentTransactionByCardId(transactionId, LocalDate.now());
        TransactionResponse result = new TransactionResponse(transactionDTO, recentTransaction);
        return result;
    }

    public ReceiptResultResponse setReciptInfo(Long transactionId, ReceiptRequest receiptRequest){
        ReceiptResultResponse result = new ReceiptResultResponse();
        Transaction transaction = transactionRepository.getTransactionById(transactionId);

        List<CategoryResult> aiResult = aiModelClient.getCatetory(receiptRequest.getProductList()).get();


        // list에 파이썬 결과물 추가
        List<ReceiptList> list = new ArrayList<>();
        Receipt receipt = Receipt.builder()
                .transaction(transaction)
                .transactionDate(receiptRequest.getDate())
                .products(list)
                .build();
        for(CategoryResult temp : aiResult){
            list.add(ReceiptList.of(receipt, temp));
            log.info(temp.getProductName() + " " + temp.getCategory());
        }
        // Todo: 1차 구현 완료

        receiptRepository.save(receipt);

        return result;
    }

    public CardResponse getCardDetail(Long cardId, Integer year, Integer month, String category){
        // Todo: 2023-09-21: Card 객체 용현이 API에서 가져와야 함
        Card card = new Card();

        // 월의 첫날부터 끝날 구함
        YearMonth toSearch = YearMonth.of(year, month);
        LocalDate startDate = toSearch.atDay(1);
        LocalDate endDate = toSearch.atEndOfMonth();
        List<TransactionDTO> list = qRepository.findTransactionListByMonth(cardId,startDate, endDate, category);

        Long sum = Long.parseLong("0");
        for(TransactionDTO temp: list){
            sum += temp.getApprovedAmount();
        }

        CardResponse result = new CardResponse(sum, card, list);


        return result;
    }

    public ReceiptListResponse getReceiptDetail(Long cardId, Integer year, Integer month, String category){
        // 월의 첫날부터 끝날 구함
        YearMonth toSearch = YearMonth.of(year, month);
        LocalDate startDate = toSearch.atDay(1);
        LocalDate endDate = toSearch.atEndOfMonth();
        List<ReceiptDTO> list = qRepository.findReceiptsByMonth(cardId, startDate, endDate, category);
        Long sum = Long.parseLong("0");

        for(ReceiptDTO temp: list){
            sum += temp.getPrice();
        }

        ReceiptListResponse result = new ReceiptListResponse(sum,list);

        return result;
    }

    // ToDo: 규람이 쓸 카테고리 최근 목록 -> 테스트 해야함
    public List<OftenCategory> getOftenCategory(Long cardId){
        List<OftenCategory> oftenCategories = new ArrayList<>();
        LocalDate now = LocalDate.now();
        now = now.minusMonths(1);
        YearMonth before = YearMonth.now();
        before = before.minusMonths(1);
        List<OftenCategory> transactions = qRepository.findOftenTransaction(cardId, before.atDay(1), before.atEndOfMonth());
        List<OftenCategory> receipts = qRepository.findOftenReceipt(cardId, before.atDay(1), before.atEndOfMonth());
        oftenCategories.addAll(transactions);
        oftenCategories.addAll(receipts);
        return oftenCategories;
    }

    public void saveNewTransaction(Long cardId, CardHistoryList history) {
        String category = kakaoUtil.getCategory(history.getMerchantName());
        transactionRepository.save(new Transaction(history, cardId, category));
    }

    private String getApiType() {
        return "user-search";
    }

    private String getTranId() {
        return "1234567890M00000000000001";
    }

}
