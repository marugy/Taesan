package com.ts.taesan.domain.transaction.api;


import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import com.ts.taesan.domain.asset.api.dto.response.CardHistoryListResponse;
import com.ts.taesan.domain.transaction.api.dto.request.LoadTransactions;
import com.ts.taesan.domain.transaction.api.dto.request.ReceiptRequest;
import com.ts.taesan.domain.transaction.api.dto.response.*;
import com.ts.taesan.domain.transaction.req.KakaoResult;
import com.ts.taesan.domain.transaction.req.TransactionsClient;
import com.ts.taesan.domain.transaction.service.TransactionService;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
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
    public ApiResponse<TransactionListResponse> getTransactions(@Parameter(hidden = true) @AuthenticationPrincipal User user, @PathVariable Long cardId, @RequestParam Integer cursor, @RequestParam Integer limit){
        TransactionListResponse result = transactionService.getTransactions(Long.valueOf(user.getUsername()), cardId, cursor, limit);
        return OK(result);
    }

    @ApiOperation(value = "상세 거래내역 불러오기", notes = "위의 거래내역 목록에서 transactionId를 통해 검색")
    @GetMapping("/{transactionId}/detail")
    public ApiResponse<TransactionResponse> getTransactionDetail(@PathVariable Long transactionId){
        TransactionResponse transaction = transactionService.getTransactionDetail(transactionId);
        return OK(transaction);
    }

    @ApiOperation(value = "거래내역에 대한 영수증 목록 불러오기", notes = "거래내역을 눌렀을 때 등록된 영수증에 대한 정보 불러오기")
    @GetMapping("/{transactionId}/receipt")
    public ApiResponse<ReceiptListResponse> getReceipts(@PathVariable Long transactionId){
        ReceiptListResponse receipts = transactionService.getReceipts(transactionId);
        return OK(receipts);
    }

    @ApiOperation(value = "영수증 정보 등록하기(미완성)", notes = "분석이 완료된 영수증 정보를 등록")
    @PostMapping("/{transactionId}/receipt")
    public ApiResponse<ReceiptResultResponse> setReciptInfo(@PathVariable Long transactionId, @RequestBody ReceiptRequest receiptRequest){
        ReceiptResultResponse result = transactionService.setReciptInfo(transactionId, receiptRequest);
        return OK(result);
    }

    @ApiOperation(value = "카드 카테고리 상세내역", notes = "패턴분석에서 위치 카테고리의 상세 내용")
    @GetMapping("/card/{cardId}")
    public ApiResponse<CardResponse> getCardDetail(@Parameter(hidden = true) @AuthenticationPrincipal User user, @PathVariable Long cardId, @RequestParam String year, @RequestParam String month
    , @RequestParam String category){
        CardResponse response = transactionService.getCardDetail(Long.valueOf(user.getUsername()), cardId, Integer.parseInt(year), Integer.parseInt(month), category);

        return OK(response);
    }

    @ApiOperation(value = "영수증 카테고리 상세내역", notes = "패턴분석에서 영수증 카테고리의 상세 내용")
    @GetMapping("/receipt/{cardId}")
    public ApiResponse<ReceiptListResponse> getReceiptDetail(@PathVariable Long cardId, @RequestParam String year, @RequestParam String month
            , @RequestParam String category){
        ReceiptListResponse result = transactionService.getReceiptDetail(cardId,Integer.parseInt(year), Integer.parseInt(month), category);
        return OK(result);
    }

    @ApiOperation(value = "거래내역 추가 요청", notes = "결제가 발생했을때 카드 서버는 이 API를 호출하여 우리 서버의 거래내역을 최신화합니다.")
    @PostMapping("/transaction/{card_id}")
    public ApiResponse<Void> addNewTransaction(
            @PathVariable("card_id") Long cardId,
            @ModelAttribute CardHistoryList history
    ) {
        transactionService.saveNewTransaction(cardId, history);
        return OK(null);
    }

}
