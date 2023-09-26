package com.taesan.mydata.domain.bank.api;

import com.taesan.mydata.domain.bank.api.dto.inner.AccountDetail;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountInfo;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountList;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountTransactionList;
import com.taesan.mydata.domain.bank.api.dto.request.*;
import com.taesan.mydata.domain.bank.api.dto.response.*;
import com.taesan.mydata.domain.bank.service.AccountQueryService;
import com.taesan.mydata.domain.bank.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.nio.file.attribute.UserPrincipal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/mydata/account-management/accounts")
public class AccountApi {

    private final AccountQueryService accountQueryService;
    private final AccountService accountService;

    @GetMapping
    public ResponseEntity<AccountListResponse> getAccountList(
//            @AuthenticationPrincipal User user,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid @ModelAttribute AccountListRequest accountListRequest)
    {
        log.info("{}", accountListRequest.getOrg_code());
//        log.info("{}", user.getUsername());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        AccountListResponse response = accountQueryService.findAccountList(accountListRequest.getUser_ci(), accountListRequest.getNext_page(), accountListRequest.getLimit());
        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }

    @PostMapping("/deposit/basic")
    public ResponseEntity<AccountInfoResponse> getAccountInfo(
            @AuthenticationPrincipal User user,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid @RequestBody AccountInfoRequest accountInfoRequest)
    {
        log.info("{}", accountInfoRequest.getOrgCode());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        AccountInfoResponse response = accountQueryService.findAccountInfo(accountInfoRequest.getAccountNum());
        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }

    @PostMapping("/deposit/detail")
    public ResponseEntity<AccountDetailResponse> getAccountDetail(
            @AuthenticationPrincipal User user,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid @RequestBody AccountDetailRequest accountDetailRequest)
    {
        log.info("{}", accountDetailRequest.getOrgCode());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        AccountDetailResponse detail = accountQueryService.findAccountDetail(accountDetailRequest.getAccountNum());
        return new ResponseEntity<>(detail, headers, HttpStatus.OK);
    }

//    @PostMapping("/deposit/transactions")
//    public ResponseEntity<AccountTransactionListResponse> getTransactions(
//            @AuthenticationPrincipal User user,
//            @RequestHeader("x-api-tran-id") String tranId,
//            @RequestHeader("x-api-type") String type,
//            @Valid @RequestBody AccountTransactionListRequest accountTransactionListRequest)
//    {
//        log.info("{}", accountTransactionListRequest.getOrgCode());
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("x-api-tran-id", "1234567890M00000000000001");
//        AccountTransactionListResponse ret = new AccountTransactionListResponse();
//        List<AccountTransactionList> list = new ArrayList<>();
//        list.add(new AccountTransactionList());
//        ret.setTransList(list);
//        return new ResponseEntity<>(ret, headers, HttpStatus.OK);
//    }

    @PostMapping("/charge")
    public ResponseEntity<ChargeResponse> charge(
            @Valid @RequestBody ChargeRequest chargeRequest)
    {
        log.info("{}", chargeRequest.getSenderAccNum());
        accountService.charge(chargeRequest.getSenderAccNum(), chargeRequest.getTransAmt());
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping("/transfer")
    public ResponseEntity<TransferResponse> transfer(
            @Valid @RequestBody TransferRequest transferRequest)
    {
        log.info("{}", transferRequest.getTransAmt());
        accountService.transfer(transferRequest.getReceiverAccNum(), transferRequest.getTransAmt());
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
