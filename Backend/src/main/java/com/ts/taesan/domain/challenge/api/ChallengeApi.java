package com.ts.taesan.domain.challenge.api;

import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeRequest;
import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeResponse;
import com.ts.taesan.domain.challenge.service.ChallengeQService;
import com.ts.taesan.domain.challenge.service.ChallengeService;
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

import static com.ts.taesan.global.api.ApiResponse.OK;

@Api(tags = "Challenge")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/challenge-management/challenges")
@Slf4j
public class ChallengeApi {

    private final ChallengeService challengeService;
    private final ChallengeQService challengeQService;

    private final MemberService memberService;
    private final MemberQService memberQService;

    @ApiOperation(value = "챌린지 상태 조회", notes = "사용자의 챌린지 상태를 조회한다 API")
    @GetMapping("/state")
    public ApiResponse<ChallengeMakeResponse> getState(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());
        ChallengeMakeResponse challengeMakeResponse = challengeQService.getState(memberId);
        return OK(challengeMakeResponse);
    }

    @ApiOperation(value = "챌린지 생성", notes = "기간과 목표기간을 입력하고 챌린지 생성하는 API")
    @PostMapping("/new")
    public ApiResponse<Void> saveChallenge(@AuthenticationPrincipal User user, @RequestBody ChallengeMakeRequest challengeMakeRequest) {
        Long memberId = Long.parseLong(user.getUsername());
        Member member = memberService.findById(memberId);
        challengeService.save(member, challengeMakeRequest);
        return OK(null);
    }

    @ApiOperation(value = "종료 첼린지 조회", notes = "종료된 챌린지를 조회하는 API")
    @GetMapping("/expired")
    public ApiResponse<Void> getExpiredChallenges() {
        return OK(null);
    }

    @ApiOperation(value = "종료 첼린지 조회", notes = "종료된 챌린지를 조회하는 API")
    @GetMapping("/{id}")
    public ApiResponse<Void> getChallenge(@RequestParam(value = "id") Long id) {
        return OK(null);
    }
}
