package com.taesan.mydata.domain.bank.api;

import com.taesan.mydata.domain.bank.api.dto.inner.AccountDetail;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountInfo;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountList;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountTransactionList;
import com.taesan.mydata.domain.bank.api.dto.request.*;
import com.taesan.mydata.domain.bank.api.dto.response.*;
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
public class AccountApi {

    @GetMapping
    public ResponseEntity<AccountListResponse> getAccountList(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid @ModelAttribute AccountListRequest accountListRequest)
    {
        log.info("{}", accountListRequest.getOrg_code());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        AccountListResponse ret = new AccountListResponse();
        List<AccountList> list = new ArrayList<>();
        list.add(new AccountList());
        ret.setAccountList(list);
        return new ResponseEntity<>(ret, headers, HttpStatus.ACCEPTED);
    }

    @PostMapping("/deposit/basic")
    public ResponseEntity<AccountInfoResponse> getAccountInfo(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid @RequestBody AccountInfoRequest accountInfoRequest)
    {
        log.info("{}", accountInfoRequest.getOrgCode());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        AccountInfoResponse ret = new AccountInfoResponse();
        List<AccountInfo> list = new ArrayList<>();
        list.add(new AccountInfo());
        ret.setBasicList(list);
        return new ResponseEntity<>(ret, headers, HttpStatus.ACCEPTED);
    }

    @PostMapping("/deposit/detail")
    public ResponseEntity<AccountDetailResponse> getAccountDetail(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid @RequestBody AccountDetailRequest accountDetailRequest)
    {
        log.info("{}", accountDetailRequest.getOrgCode());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        AccountDetailResponse ret = new AccountDetailResponse();
        List<AccountDetail> list = new ArrayList<>();
        list.add(new AccountDetail());
        ret.setDetailList(list);
        return new ResponseEntity<>(ret, headers, HttpStatus.ACCEPTED);
    }

    @PostMapping("/deposit/transactions")
    public ResponseEntity<AccountTransactionListResponse> getTransactions(
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @Valid @RequestBody AccountTransactionListRequest accountTransactionListRequest)
    {
        log.info("{}", accountTransactionListRequest.getOrgCode());
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        AccountTransactionListResponse ret = new AccountTransactionListResponse();
        List<AccountTransactionList> list = new ArrayList<>();
        list.add(new AccountTransactionList());
        ret.setTransList(list);
        return new ResponseEntity<>(ret, headers, HttpStatus.ACCEPTED);
    }

    @PostMapping("/transfer")
    public ResponseEntity<TransferResponse> transfer(
            @Valid @RequestBody TransferRequest transferRequest)
    {
        log.info("{}", transferRequest.getSenderAccNum());
        return new ResponseEntity<>(new TransferResponse(), HttpStatus.ACCEPTED);
    }

}
