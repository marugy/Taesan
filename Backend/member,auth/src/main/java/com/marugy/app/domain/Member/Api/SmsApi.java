package com.marugy.app.domain.Member.Api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.marugy.app.domain.Member.Dto.request.*;
import com.marugy.app.domain.Member.Dto.response.ResultResponse;
import com.marugy.app.domain.Member.Dto.response.SmsResponse;
import com.marugy.app.domain.Member.Service.SmsService;
import com.marugy.app.global.api.ApiResponse;

import static com.marugy.app.global.api.ApiResponse.OK;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth-management/auths")
@Slf4j
public class SmsApi {
    private final SmsService smsService;

    //인증번호 발송
    @PostMapping("/sms/send")
    public ApiResponse<SmsResponse> sendSms(@RequestBody MessageRequest messageRequest) throws UnsupportedEncodingException, URISyntaxException, NoSuchAlgorithmException, InvalidKeyException, JsonProcessingException {
        log.info(messageRequest.getTo());
        SmsResponse SmsResponse = smsService.sendSms(messageRequest);
        return OK(SmsResponse);
    }

    //인증 번호 검증
    @PostMapping("/sms/check")
    public ApiResponse<ResultResponse> verifySMS(@RequestBody VerifySmsRequest verifySmsRequest) throws UnsupportedEncodingException, URISyntaxException, NoSuchAlgorithmException, InvalidKeyException, JsonProcessingException {
        return OK(new ResultResponse());
    }

    //아이디 중복 검사
    @PostMapping("/id/check")
    public ApiResponse<ResultResponse> verifyId(@RequestBody VerifyIdRequest verifyIdRequest) {
        return OK(new ResultResponse());
    }

    //간편 비밀번호 검사
    @PostMapping("/simple-password/check")
    public ApiResponse<ResultResponse> verifySimplePassword(@RequestBody VerifySimplePasswordRequest verifySimplePasswordRequest) {
        return OK(new ResultResponse());
    }

    // 비밀번호 검사
    @PostMapping("/password/check")
    public ApiResponse<ResultResponse> verifyPassword(@RequestBody VerifyPasswordRequest verifyPasswordRequest) {
        return OK(new ResultResponse());
    }

}
