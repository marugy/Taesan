package com.ts.taesan.domain.member.Api;

import com.ts.taesan.domain.member.Dto.request.JoinRequest;
import com.ts.taesan.domain.member.Dto.request.LoginRequest;
import com.ts.taesan.domain.member.Dto.request.SimpleLoginRequest;
import com.ts.taesan.domain.member.Dto.response.LoginResponse;
import com.ts.taesan.domain.member.Dto.response.MemberInfoResponse;
import com.ts.taesan.domain.member.Dto.response.ResultResponse;
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

    @PostMapping("/join")
    public ApiResponse<ResultResponse> join(@RequestBody JoinRequest joinRequest) {
        return OK(new ResultResponse());
    }

    @PostMapping("/login")
    public ApiResponse<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        return OK(new LoginResponse());
    }

    @PostMapping("/simple-login")
    public ApiResponse<LoginResponse> simpleLogin(@RequestBody SimpleLoginRequest simpleLoginRequest) {
        return OK(new LoginResponse());
    }

    @GetMapping("/info")
    public ApiResponse<MemberInfoResponse> getMemberInfoById() {
        return OK(new MemberInfoResponse());
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

    @GetMapping("/saving")
    public ApiResponse<Integer> getSavingInfo() {
        return OK(30000);
    }

    @DeleteMapping()
    public ApiResponse<ResultResponse> deleteMemberById() {
        return OK(new ResultResponse());
    }
}
