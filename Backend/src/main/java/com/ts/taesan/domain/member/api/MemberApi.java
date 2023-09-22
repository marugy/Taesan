package com.ts.taesan.domain.member.api;

import com.ts.taesan.domain.member.dto.request.MemberJoinRequest;
import com.ts.taesan.domain.member.dto.request.MemberLoginRequest;
import com.ts.taesan.domain.member.dto.request.SimpleLoginRequest;
import com.ts.taesan.domain.member.dto.response.LoginResponse;
import com.ts.taesan.domain.member.dto.response.MemberInfoResponse;
import com.ts.taesan.domain.member.dto.response.ResultResponse;
import com.ts.taesan.domain.member.service.MemberQService;
import com.ts.taesan.domain.member.service.MemberService;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import static com.ts.taesan.global.api.ApiResponse.OK;

@Api(tags = "Member")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/member-management/members")
@Slf4j
public class MemberApi {

    private final MemberService memberService;
    private final MemberQService memberQService;

    @ApiOperation(value = "회원 가입", notes = "회원 정보를 입력하고 회원 가입을 진행하는 API")
    @PostMapping("/join")
    public ApiResponse<Boolean> join(@RequestBody MemberJoinRequest memberJoinRequest) {
        memberService.save(memberJoinRequest);
        return OK(null);
    }

    @ApiOperation(value = "로그인", notes = "아이디, 비밀번호 입력하고 로그인을 진행하는 API")
    @PostMapping("/login")
    public ApiResponse<MemberInfoResponse> login(@RequestBody MemberLoginRequest memberLoginRequest) {
        MemberInfoResponse memberInfoResponse = memberQService.login(memberLoginRequest);
        return OK(memberInfoResponse);
    }

    @ApiOperation(value = "간편 로그인", notes = "간편 비밀번호 입력하고 로그인을 진행하는 API")
    @PostMapping("/simple-login")
    public ApiResponse<MemberInfoResponse> simpleLogin(@RequestBody SimpleLoginRequest simpleLoginRequest) {
        MemberInfoResponse correct = memberQService.simpleLogin(1L, simpleLoginRequest);
        return OK(correct);
    }

    @GetMapping("/info")
    public ApiResponse<MemberInfoResponse> getMemberInfoById() {
        // TODO: 2023-09-20 로그인 후 멤버 아이디로 수정 필요
        MemberInfoResponse memberInfoResponse = memberQService.findById(1L);
        return OK(memberInfoResponse);
    }

    @PostMapping("/info")
    public ApiResponse<ResultResponse> modifyMemberInfoById() {
        return OK(new ResultResponse());
    }

    @PutMapping("/password")
    public ApiResponse<ResultResponse> modifyPasswordById() {
        return OK(new ResultResponse());
    }

    @PutMapping("/simple-password")
    public ApiResponse<ResultResponse> modifySimplePasswordById() {
        return OK(new ResultResponse());
    }

    @DeleteMapping()
    public ApiResponse<ResultResponse> deleteMemberById() {
        return OK(new ResultResponse());
    }
}
