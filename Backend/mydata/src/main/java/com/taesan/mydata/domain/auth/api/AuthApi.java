package com.taesan.mydata.domain.auth.api;

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
    public ResponseEntity<AccountListResponse> getAccountList(
            @RequestHeader("x-user-ci") String userCI,
            @RequestHeader("x-api-type") String type,
            AccountListRequest accountListRequest)
    {
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-api-tran-id", "1234567890M00000000000001");
        AccountListResponse ret = new AccountListResponse();
        List<AccountList> list = new ArrayList<>();
        list.add(new AccountList());
        ret.setAccountList(list);
        return new ResponseEntity<>(ret, headers, HttpStatus.ACCEPTED);
    }

}
