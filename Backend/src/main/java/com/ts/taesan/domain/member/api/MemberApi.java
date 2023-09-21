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
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/member-management/members")
@Slf4j
public class MemberApi {

    private final MemberService memberService;
    private final MemberQService memberQService;

    @PostMapping("/join")
    public ApiResponse<ResultResponse> join(@RequestBody MemberJoinRequest memberJoinRequest) {
        memberService.save(memberJoinRequest);
        return OK(new ResultResponse());
    }

    @PostMapping("/login")
    public ApiResponse<MemberInfoResponse> login(@RequestBody MemberLoginRequest memberLoginRequest) {
        MemberInfoResponse memberInfoResponse = memberQService.login(memberLoginRequest);
        return OK(memberInfoResponse);
    }

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
