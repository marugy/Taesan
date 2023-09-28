package com.ts.taesan.global.openfeign.auth;

import com.ts.taesan.domain.transaction.req.OpenFeignConfig;
import com.ts.taesan.global.openfeign.auth.dto.request.TokenRequest;
import com.ts.taesan.global.openfeign.auth.dto.response.TokenResponse;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountDetailRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.ChargeRequest;
import com.ts.taesan.global.openfeign.bank.dto.response.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.cloud.openfeign.SpringQueryMap;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Map;

@FeignClient(name = "auth", url = "${api.base-uri.mydata}/auth-management/oauth/2.0", configuration = OpenFeignConfig.class)
public interface AuthClient {

    @PostMapping("/token")
    ResponseEntity<? extends TokenResponse> getAccessToken(
            @RequestHeader("x-user-ci") long userCI,
            @RequestHeader("x-api-tran-id") String tranId,
            @RequestBody TokenRequest tokenRequest);

    @PostMapping("/register")
    ResponseEntity<Void> registerAuth(
            @RequestBody Map<String, String> body);
}
