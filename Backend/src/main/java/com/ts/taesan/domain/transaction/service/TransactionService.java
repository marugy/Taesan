package com.ts.taesan.domain.transaction.service;

import com.ts.taesan.domain.transaction.api.dto.request.LoadTransactions;
import com.ts.taesan.domain.transaction.api.dto.request.ReceiptRequest;
import com.ts.taesan.domain.transaction.api.dto.response.*;
import com.ts.taesan.domain.transaction.entity.Receipt;
import com.ts.taesan.domain.transaction.entity.ReceiptList;
import com.ts.taesan.domain.transaction.entity.Transaction;
import com.ts.taesan.domain.transaction.repository.ReceiptRepository;
import com.ts.taesan.domain.transaction.repository.TransactionQRepository;
import com.ts.taesan.domain.transaction.repository.TransactionRepository;
import com.ts.taesan.domain.transaction.req.KakaoResult;
import com.ts.taesan.domain.transaction.req.TransactionsClient;
import com.ts.taesan.domain.transaction.service.dto.response.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.MonthDay;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionQRepository qRepository;
    private final TransactionRepository transactionRepository;
    private final ReceiptRepository receiptRepository;
    private final TransactionsClient transactionsClient;

    Map<String, String> categoryInfo = new ConcurrentHashMap<>();
    @PostConstruct
    private void init() {
        // 초기화 처리
        categoryInfo.put("MT1", "대형마트");
        categoryInfo.put("CS2", "편의점");
        categoryInfo.put("FD6", "음식점");
        categoryInfo.put("CE7", "카페");
        categoryInfo.put("HP8", "병원");
        categoryInfo.put("PM9", "병원");
        categoryInfo.put("PK6", "교통");
        categoryInfo.put("SW8", "교통");
        categoryInfo.put("OL7", "교통");
        categoryInfo.put("AT4", "여가");
        categoryInfo.put("AD5", "여가");
        categoryInfo.put("CT1", "여가");

    }

    public TransactionListResponse getTransactions(Long cardId, Integer cursor, Integer limit){
        // Todo: 2023-09-21: Card 객체 용현이 API에서 가져와야 함
        Card card = new Card();
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

        // list에 파이썬 결과물 추가
        List<ReceiptList> list = new ArrayList<>();
        // Todo: 아직 구현 미완성
        Receipt receipt = Receipt.builder()
                .transaction(transaction)
                .transactionDate(receiptRequest.getDate())
                .products(list)
                .build();
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

        Long sum = new Long(0);
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
        Long sum = new Long(0);
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

    public boolean loadTransactions(LoadTransactions request){
        String key = "KakaoAK b0031b39d59b99bd310f4b741d4c7d63";
        // TODO : [하영] 카카오 API 키 값 config 서버에 넣기 및 용현이 디비에서 데이터 가져오면 카카오API 쏴서 DB에 넣기
        
        KakaoResult result = transactionsClient.loadUserByUsername(key,"전주24시콩나물국밥", 1, 1).get();
        log.info(categoryInfo.get(result.getDocuments().get(0).getCategory_group_code()));
        return true;
    }

}
