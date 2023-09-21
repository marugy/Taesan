package com.taesan.mydata.domain.auth.api;

import com.taesan.mydata.domain.auth.api.dto.request.AuthRequest;
import com.taesan.mydata.domain.auth.api.dto.request.TokenRequest;
import com.taesan.mydata.domain.auth.api.dto.response.AuthResponse;
import com.taesan.mydata.domain.auth.api.dto.response.TokenCreateResponse;
import com.taesan.mydata.domain.auth.api.dto.response.TokenResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/mydata/auth-management/oauth/2.0")
public class AuthApi {

    @GetMapping("/authorize")
    public ResponseEntity<AuthResponse> getAuthCode(
            @RequestHeader("x-user-ci") String userCI,
            @RequestHeader("x-api-tran-id") String tranId,
            AuthRequest authRequest)
    {
        return new ResponseEntity<>(new AuthResponse(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/token")
    public ResponseEntity<TokenResponse> getAccessToken(
            @RequestHeader("x-api-tran-id") String tranId,
            TokenRequest tokenRequest)
    {
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");

        if (tokenRequest.getCode() == null) {       // AT 갱신 로직
            return new ResponseEntity<>(new TokenResponse(), headers, HttpStatus.TEMPORARY_REDIRECT);
        } else {        // AT 발급 로직
            return new ResponseEntity<>(new TokenCreateResponse(), headers, HttpStatus.ACCEPTED);
        }

    }

}
