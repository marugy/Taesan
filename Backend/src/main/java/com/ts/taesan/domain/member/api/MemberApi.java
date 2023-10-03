package com.ts.taesan.domain.member.api;

import antlr.Token;
import com.ts.taesan.domain.member.dto.request.MemberJoinRequest;
import com.ts.taesan.domain.member.dto.request.MemberLoginRequest;
import com.ts.taesan.domain.member.dto.request.MemberModifyRequest;
import com.ts.taesan.domain.member.dto.request.SimpleLoginRequest;
import com.ts.taesan.domain.member.dto.response.MemberInfoResponse;
import com.ts.taesan.domain.member.dto.response.ResultResponse;
import com.ts.taesan.domain.member.dto.response.TokenResponse;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.service.MemberQService;
import com.ts.taesan.domain.member.service.MemberService;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.net.http.HttpHeaders;
import java.util.HashMap;
import java.util.Map;

import static com.ts.taesan.global.api.ApiResponse.OK;

@Api(tags = "Member")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/member-management/members")
@Slf4j
public class MemberApi {

    private final MemberService memberService;
    private final MemberQService memberQService;

    @ApiOperation(value = "아이디 중복 체크", notes = "회원가입할 아이디를 입력하고 중복체크하는 API")
    @GetMapping("/check")
    public ApiResponse<Boolean> checkId(@RequestParam("id") String loginId) {
        return OK(memberService.checkId(loginId));
    }

    @ApiOperation(value = "회원 가입", notes = "회원 정보를 입력하고 회원 가입을 진행하는 API")
    @PostMapping("/join")
    public ApiResponse<Boolean> join(@RequestBody MemberJoinRequest memberJoinRequest) {
        memberService.save(memberJoinRequest);
        return OK(null);
    }

    @ApiOperation(value = "로그인", notes = "아이디, 비밀번호 입력하고 로그인을 진행하는 API")
    @PostMapping("/login")
    public ApiResponse<TokenResponse> login(@RequestBody MemberLoginRequest memberLoginRequest) throws IOException {
        String loginId = memberLoginRequest.getLoginId();
        String password = memberLoginRequest.getPassword();
        TokenResponse tokenResponse = memberService.login(loginId, password);
        return OK(tokenResponse);
    }

    @ApiOperation(value = "간편 로그인", notes = "간편 비밀번호 입력하고 로그인을 진행하는 API")
    @PostMapping("/simple-login")
    public ApiResponse<TokenResponse> simpleLogin(HttpServletRequest request, @RequestBody SimpleLoginRequest simpleLoginRequest) {
        TokenResponse tokenResponse = memberService.simpleLogin(request, simpleLoginRequest);
        return OK(tokenResponse);
    }

    @ApiOperation(value = "access token 재발급", notes = "accesstoken 재발급을 진행하는 API")
    @PostMapping("/issue")
    public ApiResponse<TokenResponse> issueToken(HttpServletRequest request) throws IllegalAccessException {
        TokenResponse tokenResponse = memberService.issueAccessToken(request);
        return OK(tokenResponse);
    }

    @ApiOperation(value = "token 유효성 검사", notes = "accessToken 유효성 검사 API")
    @PostMapping("/check/token")
    public ApiResponse<Boolean> checkToken(HttpServletRequest request) {
        Boolean check = memberService.checkToken(request);
        return OK(check);
    }

    @ApiOperation(value = "로그아웃", notes = "세션 종료 및 로그아웃을 진행하는 API")
    @GetMapping("/logout")
    public ApiResponse<Void> logout(HttpServletRequest httpServletRequest, @AuthenticationPrincipal User user) {
        HttpSession session = httpServletRequest.getSession();
        session.invalidate();

        Long memberId = Long.parseLong(user.getUsername());
        memberService.logout(memberId);

        return OK(null);
    }

    @ApiOperation(value = "회원 정보 조회", notes = "회원 정보를 조회하는 API")
    @GetMapping("/info")
    public ApiResponse<MemberInfoResponse> getMemberInfoById(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());
        MemberInfoResponse memberInfoResponse = memberQService.findById(memberId);
        return OK(memberInfoResponse);
    }

    @ApiOperation(value = "회원 정보 수정", notes = "회원 정보를 수정하는 API")
    @PutMapping("/info")
    public ApiResponse<?> modifyMemberInfoById(@AuthenticationPrincipal User user, @RequestBody MemberModifyRequest memberModifyRequest) {
        Long memberId = Long.parseLong(user.getUsername());
        memberService.modify(memberId, memberModifyRequest);
        return OK(null);
    }

    @ApiOperation(value = "회원 비밀번호 수정", notes = "회원 비밀번호를 수정하는 API")
    @PutMapping("/password")
    public ApiResponse<?> modifyPasswordById(@AuthenticationPrincipal User user, @RequestBody Map<String, String> body) {
        String password = body.get("password");
        log.info(password);
        Long memberId = Long.parseLong(user.getUsername());
        memberService.modifyPassword(memberId, password);
        return OK(null);
    }

    @ApiOperation(value = "회원 간편 비밀번호 수정", notes = "회원 간편 비밀번호를 수정하는 API")
    @PutMapping("/simple-password")
    public ApiResponse<?> modifySimplePasswordById(@AuthenticationPrincipal User user, @RequestBody Map<String, String> body) {
        Long memberId = Long.parseLong(user.getUsername());
        String simplePassword = body.get("simplePassword");
        memberService.modifySimplePassword(memberId, simplePassword);
        return OK(null);
    }

    @ApiOperation(value = "회원 탈퇴", notes = "회원 탈퇴 API")
    @DeleteMapping()
    public ApiResponse<ResultResponse> deleteMemberById(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());
        memberService.deleteMember(memberId);
        return OK(null);
    }

    @ApiOperation(value = "계좌 등록", notes = "회원 탈퇴 API")
    @PostMapping("/account")
    public ApiResponse<?> addAccount(@AuthenticationPrincipal User user, @RequestBody Map<String, String> body) {
        Long memberId = Long.parseLong(user.getUsername());
        String account = body.get("account");
        memberService.addAccount(memberId, account);
        return OK(null);
    }
}
