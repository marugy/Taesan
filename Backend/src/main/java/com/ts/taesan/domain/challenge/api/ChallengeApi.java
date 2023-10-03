package com.ts.taesan.domain.challenge.api;

import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeRequest;
import com.ts.taesan.domain.challenge.dto.reqeust.ParticipateRequest;
import com.ts.taesan.domain.challenge.dto.response.*;
import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
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

    @ApiOperation(value = "종료 챌린지 상세 조회", notes = "챌린지 ID를 인자로 해당 종료된 챌린지 상세 조회 API")
    @GetMapping("/expired/{id}")
    public ApiResponse<ChallengeExpiredDetailResponse> getExpiredChallenge(@AuthenticationPrincipal User user, @PathVariable(value = "id") Long challengeId) {
        Long memberId = Long.parseLong(user.getUsername());
        Member member = memberService.findById(memberId);
        ChallengeExpiredDetailResponse challengeExpiredDetailResponse = challengeQService.getExpiredChallengeDetail(member, challengeId);
        return OK(challengeExpiredDetailResponse);
    }

    @ApiOperation(value = "모집중인 챌린지 상세 조회", notes = "챌린지 ID를 인자로 해당 모집중인 챌린지 상세 조회 API")
    @GetMapping("/recruit/{id}")
    public ApiResponse<ChallengeRecruitDetailResponse> getRecruitChallenge(@AuthenticationPrincipal User user, @PathVariable(value = "id") Long challengeId) {
        Long memberId = Long.parseLong(user.getUsername());
        Member member = memberService.findById(memberId);
        String name = member.getName();
        ChallengeRecruitDetailResponse challengeRecruitDetailResponse = challengeQService.getRecruitChallengeDetail(name, challengeId);
        return OK(challengeRecruitDetailResponse);
    }

    @ApiOperation(value = "진행중인 챌린지 상세 조회", notes = "챌린지 ID를 인자로 진행중인 챌린지 상세 조회 API")
    @GetMapping("/progress/{id}")
    public ApiResponse<ChallengeProgressDetailResponse> getProgressChallenge(@AuthenticationPrincipal User user, @PathVariable(value = "id") Long challengeId) {
        Long memberId = Long.parseLong(user.getUsername());
        Member member = memberService.findById(memberId);
        ChallengeProgressDetailResponse challengeProgressDetailResponse = challengeQService.getProgressChallengeDetail(member, challengeId);
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

    @ApiOperation(value = "챌린지 시작하기", notes = "챌린지 id로 챌린지 시작하기 API")
    @PostMapping("/start/{id}")
    public ApiResponse<?> startChallenge(@PathVariable(name = "id") Long challengeId) {
        challengeService.startChallenge(challengeId);
        return OK(null);
    }

    @ApiOperation(value = "챌린지에서 나가기", notes = "챌린지 id로 챌린지에서 나가기 API")
    @PostMapping("/exit/{id}")
    public ApiResponse<?> exitChallenge(@AuthenticationPrincipal User user, @PathVariable(name = "id") Long challengeId) {
        Long memberId = Long.parseLong(user.getUsername());
        Member member = memberService.findById(memberId);
        challengeService.exit(member, challengeId);
        return OK(null);
    }

    @ApiOperation(value = "챌린지 제거하기", notes = " 챌린지 폭파하기 API")
    @DeleteMapping("/{id}")
    public ApiResponse<?> removeChallenge(@PathVariable(name = "id") Long challengeId) {
        challengeService.delete(challengeId);
        return OK(null);
    }

    @ApiOperation(value = "종료챌린지 저금하기", notes = "종료된 챌린지에 대해서 저금하는 API")
    @PostMapping("/save/{id}")
    public ApiResponse<?> saveEndChallenge(@AuthenticationPrincipal User user, @PathVariable(name = "id") Long challengeId) {
        Long memberId = Long.parseLong(user.getUsername());
        challengeQService.saveMoney(challengeId, memberId);
        return OK(null);
    }
}
