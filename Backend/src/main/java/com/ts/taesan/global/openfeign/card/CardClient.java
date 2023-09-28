package com.ts.taesan.global.openfeign.card;

import com.ts.taesan.domain.transaction.req.OpenFeignConfig;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.openfeign.bank.dto.response.AccountListResponse;
import com.ts.taesan.global.openfeign.card.dto.request.CardInfoRequest;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import com.ts.taesan.global.openfeign.card.dto.request.CardTransactionListRequest;
import com.ts.taesan.global.openfeign.card.dto.request.PayRequest;
import com.ts.taesan.global.openfeign.card.dto.response.CardInfoResponse;
import com.ts.taesan.global.openfeign.card.dto.response.CardListResponse;
import com.ts.taesan.global.openfeign.card.dto.response.PayResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.cloud.openfeign.SpringQueryMap;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "card", url = "${api.base-uri.mydata}/card-management/cards", configuration = OpenFeignConfig.class)
public interface CardClient {

    @GetMapping
    ResponseEntity<CardListResponse> getCardList(
//            @RequestHeader("Authorization") String token,
            @RequestHeader("user-ci") long userCi,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @SpringQueryMap CardListRequest cardListRequest);

    @GetMapping("/{card_id}")
    ResponseEntity<CardInfoResponse> getCardInfo(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @PathVariable("card_id") long cardId,
            @SpringQueryMap CardInfoRequest cardInfoRequest);

    @GetMapping("/{card_id}/approval-domestic")
    ResponseEntity<CardListResponse> getCardTransactionList(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @PathVariable("card_id") long cardId,
            @SpringQueryMap CardTransactionListRequest cardTransactionListRequest);

    @PostMapping("/{card_id}/pay")
    ResponseEntity<PayResponse> pay(
            @PathVariable("card_id") long cardId,
            @SpringQueryMap PayRequest payRequest);

}
