package com.taesan.mydata.domain.bank.api;

import com.taesan.mydata.domain.bank.dto.request.AccountListRequest;
import com.taesan.mydata.domain.bank.dto.response.AccountListResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/bank/account-management/accounts")
public class AccountApi {

    @GetMapping
    public String getAccountList(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid AccountListRequest accountListRequest)
    {
        log.debug("{}, {}", tranId, type);
        return new AccountListResponse();
    }
}
