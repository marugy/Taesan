package com.ts.taesan.domain.transaction.api;


import com.ts.taesan.domain.transaction.api.dto.request.ReceiptRequest;
import com.ts.taesan.domain.transaction.response.Card;
import com.ts.taesan.domain.transaction.response.CardResponse;
import com.ts.taesan.domain.transaction.response.Receipt;
import com.ts.taesan.domain.transaction.response.Transaction;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/transaction-management/transactions")
public class TransactionAPI {

    @GetMapping("/history/{cardId}")
    public ApiResponse<CardResponse> getTransactions(@PathVariable Long cardId){
        Transaction transaction = new Transaction(new Long(1103),new Long(1), LocalDateTime.now(), new Long(10000) ,new Long(10000), "싸피", "교통");
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);
        Card card = new Card("1111222233334444", "김싸피", "신한");
        CardResponse cardResponse = new CardResponse(new Long("100000"), card, transactions);
        return OK(cardResponse);
    }

    @GetMapping("/{transactionId}/detail")
    public ApiResponse<Transaction> getTransactionDetail(@PathVariable Long transactionId){
        Transaction transaction = new Transaction(new Long(1103),new Long(1), LocalDateTime.now(), new Long(10000) ,new Long(10000), "싸피", "교통");


        return OK(transaction);
    }

    @PostMapping("/{transactionId}/recepit")
    public ApiResponse<String> getReciptInfo(@PathVariable Long transactionId,@RequestBody ReceiptRequest request){

        return OK("Success");
    }

    @GetMapping("/card/{cardId}")
    public ApiResponse<List<Transaction>> getCardDetail(@PathVariable Long cardId, @RequestParam String year, @RequestParam String month
    , @RequestParam String category){
        Transaction transaction = new Transaction(new Long(1103),new Long(1), LocalDateTime.now(), new Long(10000) ,new Long(10000), "싸피", "교통");

        List<Transaction> list = new ArrayList<>();
        return OK(list);
    }
    @GetMapping("/receipt/{cardId}")
    public ApiResponse<List<Receipt>> getReceiptDetail(@PathVariable Long cardId, @RequestParam String year, @RequestParam String month
            , @RequestParam String category){
        Transaction transaction = new Transaction(new Long(1103),new Long(1), LocalDateTime.now(), new Long(10000) ,new Long(10000), "싸피", "교통");
        List<Receipt> receipts = new ArrayList<>();

        return OK(receipts);
    }
}
