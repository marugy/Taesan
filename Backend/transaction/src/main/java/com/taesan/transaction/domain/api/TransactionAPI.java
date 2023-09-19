package com.taesan.transaction.domain.api;

import com.taesan.transaction.domain.api.dto.request.ReceiptRequest;
import com.taesan.transaction.domain.api.dto.request.TransactionDetailRequest;
import com.taesan.transaction.domain.api.dto.request.TransactionsRequest;
import com.taesan.transaction.domain.service.dto.response.Card;
import com.taesan.transaction.domain.service.dto.response.Transaction;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/transaction-management/transactions")
public class TransactionAPI {

    @PostMapping("/history")
    public ResponseEntity<?> getTransactions(TransactionsRequest request){
        Transaction transaction = new Transaction(new Long(1103),new Long(1), LocalDateTime.now(), new Long(10000), "싸피", "교통");
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);
        Card cardResponse = new Card("1111222233334444", "김싸피", "신한", transactions);
        return new ResponseEntity<>(cardResponse, HttpStatus.OK);
    }

    @PostMapping("/detail")
    public ResponseEntity<?> getTransactions(TransactionDetailRequest request){
        Transaction transaction = new Transaction(new Long(1103),new Long(1), LocalDateTime.now(), new Long(10000), "싸피", "교통");

        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }

    @PostMapping("/recepit")
    public ResponseEntity<?> getReciptInfo(ReceiptRequest request){

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
