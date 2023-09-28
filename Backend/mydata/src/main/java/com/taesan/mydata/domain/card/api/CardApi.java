package com.taesan.mydata.domain.card.api;

import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import com.taesan.mydata.domain.card.api.dto.request.*;
import com.taesan.mydata.domain.card.api.dto.response.*;
import com.taesan.mydata.domain.card.service.CardQueryService;
import com.taesan.mydata.domain.card.service.CardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/mydata/card-management/cards")
public class CardApi {

    private final CardQueryService cardQueryService;
    private final CardService cardService;

    @GetMapping
    public ResponseEntity<CardListResponse> getCardList(
            @AuthenticationPrincipal User user,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid @ModelAttribute CardListRequest accountListRequest)
    {
        log.info("{}", accountListRequest.getOrg_code());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        CardListResponse cardList = cardQueryService.findCardList(Long.parseLong(user.getUsername()), accountListRequest.getNext_page(), accountListRequest.getLimit());
        return new ResponseEntity<>(cardList, headers, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{card_id}")
    public ResponseEntity<CardInfoResponse> getCardInfo(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @PathVariable("card_id") long cardId,
            @Valid @ModelAttribute CardInfoRequest cardInfoRequest)
    {
        log.info("{}", cardInfoRequest.getOrg_code());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        CardInfoResponse cardInfo = cardQueryService.findCardInfo(cardId);
        return new ResponseEntity<>(cardInfo, headers, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{card_id}/approval-domestic")
    public ResponseEntity<CardListResponse> getCardTransactionList(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @PathVariable("card_id") long cardId,
            @Valid @ModelAttribute CardTransactionListRequest cardTransactionListRequest)
    {
        log.info("{}", cardTransactionListRequest.getOrg_code());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        return new ResponseEntity<>(new CardListResponse(), headers, HttpStatus.ACCEPTED);
    }

    @PostMapping("/{card_id}/pay")
    public ResponseEntity<PayResponse> pay(
            @PathVariable("card_id") long cardId,
            @Valid @RequestBody PayRequest payRequest)
    {
        log.info("{}", payRequest.getMerchantRegno());
        return new ResponseEntity<>(new PayResponse(), HttpStatus.ACCEPTED);
    }

}
