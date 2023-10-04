package com.ts.taesan.global.openfeign.card;

import com.ts.taesan.domain.transaction.entity.Transaction;
import com.ts.taesan.domain.transaction.req.OpenFeignConfig;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.openfeign.bank.dto.response.AccountListResponse;
import com.ts.taesan.global.openfeign.card.dto.request.CardInfoRequest;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import com.ts.taesan.global.openfeign.card.dto.request.CardTransactionListRequest;
import com.ts.taesan.global.openfeign.card.dto.request.PayRequest;
import com.ts.taesan.global.openfeign.card.dto.response.CardInfoResponse;
import com.ts.taesan.global.openfeign.card.dto.response.CardListResponse;
import com.ts.taesan.global.openfeign.card.dto.response.CardTransactionListResponse;
import com.ts.taesan.global.openfeign.card.dto.response.PayResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.cloud.openfeign.SpringQueryMap;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "card", url = "${api.base-uri.mydata}/card-management/cards", configuration = OpenFeignConfig.class)
public interface CardClient {

    @GetMapping
    ResponseEntity<CardListResponse> getCardList(
            @RequestHeader("Authorization") String token,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @SpringQueryMap CardListRequest cardListRequest);

    @GetMapping("/{card_id}")
    ResponseEntity<CardInfoResponse> getCardInfo(
            @RequestHeader("Authorization") String token,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @PathVariable("card_id") long cardId,
            @SpringQueryMap CardInfoRequest cardInfoRequest);

    @GetMapping("/{card_id}/approval-domestic")
    ResponseEntity<CardTransactionListResponse> getCardTransactionList(
            @RequestHeader("Authorization") String token,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @PathVariable("card_id") long cardId,
            @SpringQueryMap CardTransactionListRequest cardTransactionListRequest);

    @PostMapping("/{card_id}/pay")
    ResponseEntity<PayResponse> pay(
            @RequestHeader("Authorization") String token,
            @PathVariable("card_id") long cardId,
            @RequestBody Transaction transaction);

    @GetMapping("/recentHistoryId")
    ResponseEntity<Long> getRecentHistoryId(
            @RequestHeader("Authorization") String token);

}
