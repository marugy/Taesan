package com.ts.taesan.domain.challenge.api;

import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeRequest;
import com.ts.taesan.domain.challenge.dto.reqeust.ParticipateRequest;
import com.ts.taesan.domain.challenge.dto.response.ChallengeProgressDetailResponse;
import com.ts.taesan.domain.challenge.dto.response.ChallengeMakeResponse;
import com.ts.taesan.domain.challenge.dto.response.ChallengeRecruitDetailResponse;
import com.ts.taesan.domain.challenge.dto.response.ChallengeResponse;
import com.ts.taesan.domain.challenge.service.ChallengeQService;
import com.ts.taesan.domain.challenge.service.ChallengeService;
import com.ts.taesan.domain.challenge.service.dto.ChallengeStartRequest;
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

import java.util.List;

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
        ChallengeStartRequest challengeStartRequest = new ChallengeStartRequest(member, challengeMakeRequest);
        challengeService.save(challengeStartRequest);
        return OK(null);
    }

    @ApiOperation(value = "종료 첼린지 조회", notes = "종료된 챌린지를 조회하는 API")
    @GetMapping("/expired")
    public ApiResponse<List<ChallengeResponse>> getExpiredChallenges(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());
        List<ChallengeResponse> challengeResponses = challengeQService.getEndChallenges(memberId);
        return OK(challengeResponses);
    }

    @ApiOperation(value = "모집중인 챌린지 상세 조회", notes = "챌린지 ID를 인자로 해당 모집중인 챌린지 상세 조회 API")
    @GetMapping("/{id}/recruit")
    public ApiResponse<ChallengeRecruitDetailResponse> getRecruitChallenge(@PathVariable(value = "id") Long challengeId) {
        ChallengeRecruitDetailResponse challengeRecruitDetailResponse = challengeQService.getRecruitChallengeDetail(challengeId);
        return OK(challengeRecruitDetailResponse);
    }

    @ApiOperation(value = "진행중인 챌린지 상세 조회", notes = "챌린지 ID를 인자로 진행중인 챌린지 상세 조회 API")
    @GetMapping("/{id}/progress")
    public ApiResponse<ChallengeProgressDetailResponse> getProgressChallenge(@PathVariable(value = "id") Long challengeId) {
        ChallengeProgressDetailResponse challengeProgressDetailResponse = challengeQService.getProgressChallengeDetail(challengeId);
        return OK(challengeProgressDetailResponse);
    }

    @ApiOperation(value = "코드로 챌린지 참가", notes = "uuid로 해당 챌린지 참여 API")
    @PostMapping("/join")
    public ApiResponse<?> participate(@AuthenticationPrincipal User user, @RequestBody ParticipateRequest participateRequest) {
        Long memberId = Long.parseLong(user.getUsername());
        Member member = memberService.findById(memberId);
        challengeService.participate(member, participateRequest);
        return OK(null);
    }

    @ApiOperation(value = "챌린지에서 나가기", notes = "챌린지 id로 챌린지에서 나가기 API")
    @PostMapping("/{id}/exit")
    public ApiResponse<?> exitChallenge(@AuthenticationPrincipal User user, @PathVariable(name = "id") Long challengeId) {
        Long memberId = Long.parseLong(user.getUsername());
        Member member = memberService.findById(memberId);
        challengeService.exit(member, challengeId);
        return OK(null);
    }

    @ApiOperation(value = "챌린지 시작하기", notes = "챌린지 id로 챌린지 시작하기 API")
    @PostMapping("/{id}/start")
    public ApiResponse<?> startChallenge(@PathVariable(name = "id") Long challengeId) {
        challengeService.startChallenge(challengeId);
        return OK(null);
    }
}
