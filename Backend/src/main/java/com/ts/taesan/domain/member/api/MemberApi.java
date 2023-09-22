package com.ts.taesan.domain.member.api;

import com.ts.taesan.domain.member.dto.request.MemberJoinRequest;
import com.ts.taesan.domain.member.dto.request.MemberLoginRequest;
import com.ts.taesan.domain.member.dto.request.MemberModifyRequest;
import com.ts.taesan.domain.member.dto.request.SimpleLoginRequest;
import com.ts.taesan.domain.member.dto.response.MemberInfoResponse;
import com.ts.taesan.domain.member.dto.response.ResultResponse;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.service.MemberQService;
import com.ts.taesan.domain.member.service.MemberService;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
    public ApiResponse<MemberInfoResponse> login(@RequestBody MemberLoginRequest memberLoginRequest) {
        MemberInfoResponse memberInfoResponse = memberQService.login(memberLoginRequest);
        // TODO: 2023-09-22 JWT 응답으로 변경 
        return OK(memberInfoResponse);
    }

    @ApiOperation(value = "간편 로그인", notes = "간편 비밀번호 입력하고 로그인을 진행하는 API")
    @PostMapping("/simple-login")
    public ApiResponse<MemberInfoResponse> simpleLogin(@RequestBody SimpleLoginRequest simpleLoginRequest) {
        MemberInfoResponse correct = memberQService.simpleLogin(1L, simpleLoginRequest);
        // TODO: 2023-09-22 JWT 응답으로 변경
        return OK(correct);
    }

    @ApiOperation(value = "로그아웃", notes = "세션 종료 및 로그아웃을 진행하는 API")
    @GetMapping("/logout")
    public ApiResponse<Void> logout(HttpServletRequest httpServletRequest) {
        HttpSession session = httpServletRequest.getSession();
        session.invalidate();
        return OK(null);
    }

    @ApiOperation(value = "회원 정보 조회", notes = "회원 정보를 조회하는 API")
    @GetMapping("/info")
    public ApiResponse<MemberInfoResponse> getMemberInfoById() {
        // TODO: 2023-09-20 로그인 후 멤버 아이디로 수정 필요
        MemberInfoResponse memberInfoResponse = memberQService.findById(1L);
        return OK(memberInfoResponse);
    }

    @ApiOperation(value = "회원 정보 수정", notes = "회원 정보를 수정하는 API")
    @PutMapping("/info")
    public ApiResponse<?> modifyMemberInfoById(@RequestBody MemberModifyRequest memberModifyRequest) {
        log.info(memberModifyRequest.toString());

        // TODO: 2023-09-22 토큰에서 회원 id 추출로 변경 필요
        Long memberId = 1L;
        memberService.modify(memberId, memberModifyRequest);
        return OK(null);
    }

    @ApiOperation(value = "회원 비밀번호 수정", notes = "회원 비밀번호를 수정하는 API")
    @PutMapping("/password")
    public ApiResponse<?> modifyPasswordById(@RequestBody Map<String, String> body) {
        // TODO: 2023-09-22 회원 ID 수정
        String password = body.get("password");
        log.info(password);
        Long memberId = 1L;
        memberService.modifyPassword(memberId, password);
        return OK(null);
    }

    @ApiOperation(value = "회원 간편 비밀번호 수정", notes = "회원 간편 비밀번호를 수정하는 API")
    @PutMapping("/simple-password")
    public ApiResponse<?> modifySimplePasswordById(@RequestBody Map<String, String> body) {
        // TODO: 2023-09-22 회원 ID 수정
        Long memberId = 1L;
        String simplePassword = body.get("simplePassword");
        memberService.modifySimplePassword(memberId, simplePassword);
        return OK(null);
    }

    @ApiOperation(value = "회원 탈퇴", notes = "회원 탈퇴 API")
    @DeleteMapping()
    public ApiResponse<ResultResponse> deleteMemberById() {
        // TODO: 2023-09-22 회원 ID 수정
        Long memberId = 1L;
        memberService.deleteMember(memberId);
        return OK(null);
    }
}
