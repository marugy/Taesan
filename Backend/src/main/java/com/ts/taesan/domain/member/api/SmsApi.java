package com.ts.taesan.domain.member.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ts.taesan.domain.member.dto.request.*;
import com.ts.taesan.domain.member.dto.response.ResultResponse;
import com.ts.taesan.domain.member.dto.response.SmsResponse;
import com.ts.taesan.domain.member.service.MemberService;
import com.ts.taesan.domain.member.service.SmsService;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth-management/auths")
@Slf4j
public class SmsApi {
    private final SmsService smsService;
    private final MemberService memberService;

    //인증번호 발송
    @PostMapping("/sms/send")
    public ApiResponse<SmsResponse> sendSms(@RequestBody MessageRequest messageRequest) throws UnsupportedEncodingException, URISyntaxException, NoSuchAlgorithmException, InvalidKeyException, JsonProcessingException {
        log.info(messageRequest.getTo());
        SmsResponse smsResponse = smsService.sendSms(messageRequest);
        return OK(smsResponse);
    }

    //인증 번호 검증
    @PostMapping("/sms/check")
    public ApiResponse<Boolean> verifySMS(@RequestBody VerifySmsRequest verifySmsRequest) throws ChangeSetPersister.NotFoundException, UnsupportedEncodingException, URISyntaxException, NoSuchAlgorithmException, InvalidKeyException, JsonProcessingException {
        Boolean check = smsService.verifySms(verifySmsRequest);
        return OK(check);
    }

    //간편 비밀번호 검사
    @PostMapping("/simple-password/check")
    public ApiResponse<Boolean> verifySimplePassword(@AuthenticationPrincipal User user, @RequestBody VerifySimplePasswordRequest verifySimplePasswordRequest) {
        Long memberId = Long.parseLong(user.getUsername());
        Boolean check = memberService.checkSImplePassword(memberId, verifySimplePasswordRequest.getSimplePassword());

        return OK(check);
    }

    // 비밀번호 검사
    @PostMapping("/password/check")
    public ApiResponse<Boolean> verifyPassword(@AuthenticationPrincipal User user, @RequestBody VerifyPasswordRequest verifyPasswordRequest) {
        Long memberId = Long.parseLong(user.getUsername());
        Boolean check = memberService.checkPassword(memberId, verifyPasswordRequest.getPassword());
        return OK(check);
    }

}
