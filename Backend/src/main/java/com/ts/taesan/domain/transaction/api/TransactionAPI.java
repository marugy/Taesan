package com.ts.taesan.domain.transaction.api;


import com.ts.taesan.domain.transaction.api.dto.request.LoadTransactions;
import com.ts.taesan.domain.transaction.api.dto.request.ReceiptRequest;
import com.ts.taesan.domain.transaction.api.dto.response.*;
import com.ts.taesan.domain.transaction.req.KakaoResult;
import com.ts.taesan.domain.transaction.req.TransactionsClient;
import com.ts.taesan.domain.transaction.service.TransactionService;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.ApiOperation;
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
    @ApiOperation(value = "기본 거래내역 목록 불러오기", notes = "카드Id, 불러올 offset, 가져올 크기 지정")
    @GetMapping("/history/{cardId}")
    public ApiResponse<TransactionListResponse> getTransactions(@PathVariable Long cardId, @RequestParam Integer cursor, @RequestParam Integer limit){
        TransactionListResponse result = transactionService.getTransactions(cardId, cursor, limit);
        return OK(result);
    }

    @ApiOperation(value = "상세 거래내역 불러오기", notes = "위의 거래내역 목록에서 transactionId를 통해 검색")
    @GetMapping("/{transactionId}/detail")
    public ApiResponse<TransactionResponse> getTransactionDetail(@PathVariable Long transactionId){
        TransactionResponse transaction = transactionService.getTransactionDetail(transactionId);
        return OK(transaction);
    }

    @ApiOperation(value = "영수증 정보 등록하기(미완성)", notes = "분석이 완료된 영수증 정보를 등록")
    @PostMapping("/{transactionId}/receipt")
    public ApiResponse<ReceiptResultResponse> setReciptInfo(@PathVariable Long transactionId, @RequestBody ReceiptRequest receiptRequest){
        ReceiptResultResponse result = transactionService.setReciptInfo(transactionId, receiptRequest);
        return OK(result);
    }

    @ApiOperation(value = "카드 카테고리 상세내역", notes = "패턴분석에서 위치 카테고리의 상세 내용")
    @GetMapping("/card/{cardId}")
    public ApiResponse<CardResponse> getCardDetail(@PathVariable Long cardId, @RequestParam String year, @RequestParam String month
    , @RequestParam String category){
        CardResponse response = transactionService.getCardDetail(cardId,Integer.parseInt(year), Integer.parseInt(month), category);

        return OK(response);
    }

    @ApiOperation(value = "영수증 카테고리 상세내역", notes = "패턴분석에서 영수증 카테고리의 상세 내용")
    @GetMapping("/receipt/{cardId}")
    public ApiResponse<ReceiptListResponse> getReceiptDetail(@PathVariable Long cardId, @RequestParam String year, @RequestParam String month
            , @RequestParam String category){
        ReceiptListResponse result = transactionService.getReceiptDetail(cardId,Integer.parseInt(year), Integer.parseInt(month), category);
        return OK(result);
    }

    @ApiOperation(value = "최초 거래내역 불러오기(미완성)", notes = "최초 카드Id 마다 거래내역 불러오기 API")
    @PostMapping("/load/transaction")
//    public ApiResponse<String> loadTransactions(@RequestBody LoadTransactions request){
    public ApiResponse<String> loadTransactions(){
        transactionService.loadTransactions(new LoadTransactions(new ArrayList<>()));
        return OK("Success");

    }
}
