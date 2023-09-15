package com.marugy.app.domain.Member.Api;

import static com.marugy.app.global.api.ApiResponse.OK;

import com.marugy.app.domain.Member.Dto.request.JoinRequest;
import com.marugy.app.domain.Member.Dto.request.LoginRequest;
import com.marugy.app.domain.Member.Dto.request.SimpleLoginRequest;
import com.marugy.app.domain.Member.Dto.response.LoginResponse;
import com.marugy.app.domain.Member.Dto.response.MemberInfoResponse;
import com.marugy.app.domain.Member.Dto.response.ResultResponse;
import com.marugy.app.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.Result;

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
