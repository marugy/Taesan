package com.ts.taesan.domain.transaction.service;

import com.ts.taesan.domain.transaction.api.dto.request.ReceiptRequest;
import com.ts.taesan.domain.transaction.api.dto.response.*;
import com.ts.taesan.domain.transaction.repository.TransactionQRepository;
import com.ts.taesan.domain.transaction.repository.TransactionRepository;
import com.ts.taesan.domain.transaction.service.dto.response.*;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionQRepository qRepository;
    private final TransactionRepository repository;

    public TransactionListResponse getTransactions(Long cardId, Integer cursor, Integer limit){
        // Todo: 2023-09-21: Card 객체 용현이 API에서 가져와야 함
        Card card = new Card();
        List<Transaction> list = qRepository.findTransactionListByCardId(cardId, cursor, limit);
        TransactionListResponse response = new TransactionListResponse(cursor.toString(), card, limit.toString(), list);
        return response;
    }

    public TransactionResponse getTransactionDetail(Long transactionId){
        Transaction transaction = qRepository.findTransactionDetailByCardId(transactionId);
        RecentTransaction recentTransaction = qRepository.findRecentTransactionByCardId(transactionId, LocalDate.now());
        TransactionResponse result = new TransactionResponse(transaction, recentTransaction);
        return result;
    }

    public ReceiptResultResponse setReciptInfo(Long transactionId, ReceiptRequest receiptRequest){
        ReceiptResultResponse result = new ReceiptResultResponse();

        // Todo: 아직 구현 미완성
        return result;
    }

    public CardResponse getCardDetail(Long cardId, Integer year, Integer month, String category){
        // Todo: 2023-09-21: Card 객체 용현이 API에서 가져와야 함
        Card card = new Card();

        // 월의 첫날부터 끝날 구함
        YearMonth toSearch = YearMonth.of(year, month);
        LocalDate startDate = toSearch.atDay(1);
        LocalDate endDate = toSearch.atEndOfMonth();
        List<Transaction> list = qRepository.findTransactionListByMonth(cardId,startDate, endDate, category);

        Long sum = new Long(0);
        for(Transaction temp: list){
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
        List<Receipt> list = qRepository.findReceiptsByMonth(cardId, startDate, endDate, category);
        Long sum = new Long(0);
        for(Receipt temp: list){
            sum += temp.getPrice();
        }

        ReceiptListResponse result = new ReceiptListResponse(sum,list);

        return result;
    }

}
