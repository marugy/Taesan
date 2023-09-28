package com.ts.taesan.global.openfeign.bank;

import com.ts.taesan.global.openfeign.bank.dto.request.AccountDetailRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountInfoRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.ChargeRequest;
import com.ts.taesan.global.openfeign.bank.dto.response.*;
import com.ts.taesan.domain.transaction.req.OpenFeignConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.cloud.openfeign.SpringQueryMap;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "bank", url = "${api.base-uri.mydata}/account-management/accounts", configuration = OpenFeignConfig.class)
public interface BankClient {
//    @GetMapping("keyword={name}&page=1&size=1")
//    public Optional<KakaoResult> loadUserByUsername(@RequestHeader("Authorization") String key, @PathVariable String name);
    @GetMapping
    ResponseEntity<AccountListResponse> getAccountList(
//            @RequestHeader("Authorization") String token,
            @RequestHeader("user-ci") long userCi,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @SpringQueryMap AccountListRequest accountListRequest);


    @PostMapping("/deposit/basic")
    ResponseEntity<AccountInfoResponse> getAccountInfo(
//            @AuthenticationPrincipal User user,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @SpringQueryMap AccountInfoRequest accountInfoRequest);

    @PostMapping("/deposit/detail")
    ResponseEntity<AccountDetailResponse> getAccountDetail(
//            @AuthenticationPrincipal User user,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestHeader("x-api-type") String type,
            @SpringQueryMap AccountDetailRequest accountDetailRequest);

    @PostMapping("/charge")
    ResponseEntity<ChargeResponse> charge(
            @SpringQueryMap ChargeRequest chargeRequest);

    @PostMapping("/transfer")
    ResponseEntity<TransferResponse> transfer(
            @SpringQueryMap TransferResponse transferRequest);

}
