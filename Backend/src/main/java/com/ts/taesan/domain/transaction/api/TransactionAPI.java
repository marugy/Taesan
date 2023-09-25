package com.ts.taesan.domain.transaction.api;


import com.ts.taesan.domain.transaction.api.dto.request.LoadTransactions;
import com.ts.taesan.domain.transaction.api.dto.request.ReceiptRequest;
import com.ts.taesan.domain.transaction.api.dto.response.ReceiptListResponse;
import com.ts.taesan.domain.transaction.api.dto.response.TransactionListResponse;
import com.ts.taesan.domain.transaction.api.dto.response.TransactionResponse;
import com.ts.taesan.domain.transaction.req.KakaoResult;
import com.ts.taesan.domain.transaction.req.TransactionsClient;
import com.ts.taesan.domain.transaction.service.TransactionService;
import com.ts.taesan.domain.transaction.api.dto.response.CardResponse;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import static com.ts.taesan.global.api.ApiResponse.OK;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/transactions")
public class TransactionAPI {

    private final TransactionService transactionService;
    @GetMapping("/history/{cardId}")
    public ApiResponse<TransactionListResponse> getTransactions(@PathVariable Long cardId, @RequestParam Integer cursor, @RequestParam Integer limit){
        TransactionListResponse result = transactionService.getTransactions(cardId, cursor, limit);
        return OK(result);
    }

    @GetMapping("/{transactionId}/detail")
    public ApiResponse<TransactionResponse> getTransactionDetail(@PathVariable Long transactionId){
        TransactionResponse transaction = transactionService.getTransactionDetail(transactionId);
        return OK(transaction);
    }

    @PostMapping("/{transactionId}/receipt")
    public ApiResponse<String> setReciptInfo(@PathVariable Long transactionId, @RequestBody ReceiptRequest receiptRequest){

        return OK("Success");
    }

    @GetMapping("/card/{cardId}")
    public ApiResponse<CardResponse> getCardDetail(@PathVariable Long cardId, @RequestParam String year, @RequestParam String month
    , @RequestParam String category){
        CardResponse response = transactionService.getCardDetail(cardId,Integer.parseInt(year), Integer.parseInt(month), category);

        return OK(response);
    }
    @GetMapping("/receipt/{cardId}")
    public ApiResponse<ReceiptListResponse> getReceiptDetail(@PathVariable Long cardId, @RequestParam String year, @RequestParam String month
            , @RequestParam String category){
        ReceiptListResponse result = transactionService.getReceiptDetail(cardId,Integer.parseInt(year), Integer.parseInt(month), category);
        return OK(result);
    }

    @PostMapping("/load/transaction")
//    public ApiResponse<String> loadTransactions(@RequestBody LoadTransactions request){
    public ApiResponse<String> loadTransactions(){
        String key = "KakaoAK b0031b39d59b99bd310f4b741d4c7d63";
        transactionService.loadTransactions(new LoadTransactions(new ArrayList<>()));
//        KakaoResult result = transactionsClient.loadUserByUsername(key,"성심당", 1, 1).get();
//        log.info(result.getDocuments().get(0).getPlace_name());
//        log.info(result.getPlace_name()+ result.getKeyword());
        return OK("Success");

    }
}
