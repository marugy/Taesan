package com.taesan.mydata.domain.card.api;

import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import com.taesan.mydata.domain.card.api.dto.request.*;
import com.taesan.mydata.domain.card.api.dto.response.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/mydata/account-management/accounts")
public class CardApi {

    @GetMapping
    public ResponseEntity<CardListResponse> getAccountList(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            CardListRequest accountListRequest)
    {
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        CardListResponse ret = new CardListResponse();
        List<CardList> list = new ArrayList<>();
        list.add(new CardList());
        ret.setCardList(list);
        return new ResponseEntity<>(ret, headers, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{card_id}")
    public ResponseEntity<CardListResponse> getAccountInfo(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @PathVariable("card_id") long cardId,
            @Valid CardListRequest cardListRequest)
    {
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        return new ResponseEntity<>(new CardListResponse(), headers, HttpStatus.ACCEPTED);
    }

}
