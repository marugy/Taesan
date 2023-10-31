package com.ts.taesan.domain.transaction.api;


import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import com.ts.taesan.domain.asset.api.dto.response.CardHistoryListResponse;
import com.ts.taesan.domain.transaction.api.dto.request.LoadTransactions;
import com.ts.taesan.domain.transaction.api.dto.request.ReceiptRequest;
import com.ts.taesan.domain.transaction.api.dto.response.*;
import com.ts.taesan.domain.transaction.service.TransactionService;
import com.ts.taesan.domain.transaction.service.dto.response.OftenCategory;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/transactions")
public class TransactionAPI {

    private final TransactionService transactionService;
    @ApiOperation(value = "기본 거래내역 목록 불러오기", notes = "카드Id, 불러올 cursor, 가져올 크기 지정")
    @GetMapping("/history/{cardId}")
    public ApiResponse<TransactionListResponse> getTransactions(@Parameter(hidden = true) @AuthenticationPrincipal User user, @PathVariable Long cardId, @RequestParam(required = false) Long cursor, @RequestParam Integer limit){
        TransactionListResponse result = transactionService.getTransactions(Long.valueOf(user.getUsername()), cardId, cursor, limit);
        return OK(result);
    }

    @ApiOperation(value = "상세 거래내역 불러오기", notes = "위의 거래내역 목록에서 transactionId를 통해 검색")
    @GetMapping("/{transactionId}/{cardId}/detail")
    public ApiResponse<TransactionResponse> getTransactionDetail(@AuthenticationPrincipal User user, @PathVariable Long transactionId, @PathVariable Long cardId){
        Long memberId = Long.valueOf(user.getUsername());
        TransactionResponse transaction = transactionService.getTransactionDetail(transactionId, memberId, cardId);
        return OK(transaction);
    }

    @ApiOperation(value = "거래내역에 대한 영수증 목록 불러오기", notes = "거래내역을 눌렀을 때 등록된 영수증에 대한 정보 불러오기")
    @GetMapping("/{transactionId}/receipt")
    public ApiResponse<ReceiptListResponse> getReceipts(@PathVariable Long transactionId){
        ReceiptListResponse receipts = transactionService.getReceipts(transactionId);
        return OK(receipts);
    }

    @ApiOperation(value = "영수증 정보 등록하기", notes = "분석이 완료된 영수증 정보를 등록")
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

//    @ApiOperation(value = "거래내역 추가 요청", notes = "결제가 발생했을때 카드 서버는 이 API를 호출하여 우리 서버의 거래내역을 최신화합니다.")
//    @PostMapping("/transaction/{card_id}")
//    public ResponseEntity<Void> addNewTransaction(
//            @AuthenticationPrincipal User user,
//            @PathVariable("card_id") Long cardId,
//            @ModelAttribute CardHistoryList history
//    ) {
//        transactionService.saveNewTransaction(cardId, history, Long.parseLong(user.getUsername()));
//        return ResponseEntity.ok(null);
//    }

    @ApiOperation(value = "자주 쓰는 카테고리 목록 불러오기", notes = "습관 생성 등에서 자주 쓰는 카테고리 목록 및 가격 불러오기")
    @GetMapping("/oftenTransaction")
    public ApiResponse<List<OftenCategory>> getOftenCategory(
            @AuthenticationPrincipal User user
    ) {

        List<OftenCategory> result =  transactionService.getOftenCategory(Long.parseLong(user.getUsername()));
        return OK(result);
    }

}
