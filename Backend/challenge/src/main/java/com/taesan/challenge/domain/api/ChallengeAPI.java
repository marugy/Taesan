package com.taesan.challenge.domain.api;

import com.taesan.challenge.domain.dto.request.ChallengeRegisterRequest;
import com.taesan.challenge.domain.dto.request.ChallengeTransferRequest;
import com.taesan.challenge.domain.dto.response.*;
import com.taesan.challenge.global.api.ApiResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import static com.taesan.challenge.global.api.ApiResult.OK;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/challenge-management/challenges")
public class ChallengeAPI {

    @PostMapping("/new")
    public ApiResult<Void> registerNewChallenge(
            @RequestBody ChallengeRegisterRequest challengeRegisterRequest
    ) {
        return OK(null);
    }

    @GetMapping("/expired")
    public ApiResult<ChallengeListResponse> getChallengeList() {
        ArrayList<ChallengeInfo> challengeInfos = new ArrayList<>();
        return OK(new ChallengeListResponse(challengeInfos));
    }

    @GetMapping("/state")
    public ApiResult<ChallengeDetailResponse> getChallengeDetail() {
        ArrayList<ParticipantInfo> itemList = new ArrayList<>();
        itemList.add(new ParticipantInfo());
        ChallengeDetailResponse build = ChallengeDetailResponse.builder()
                .participantList(itemList)
                .build();
        return OK(build);
    }

    @PostMapping("/{id}/join")
    public ApiResult<Void> joinChallenge(
            @PathVariable("id") Long challengeId,
            @RequestBody String code
    ) {
        return OK(null);
    }

    @PostMapping("/{id}/exit")
    public ApiResult<Void> exitChallenge(
            @PathVariable("id") Long challengeId
    ) {
        return OK(null);
    }

    @PostMapping("/{id}/start")
    public ApiResult<Void> startChallenge(
            @PathVariable("id") Long challengeId
    ) {
        return OK(null);
    }

    @GetMapping("/{id}/recruit")
    public ApiResult<RecruitingChallengeResponse> getRecruitingChallenge(
            @PathVariable("id") Long challengeId
    ) {
        ArrayList<ParticipantInfo> itemList = new ArrayList<>();
        itemList.add(new ParticipantInfo());
        RecruitingChallengeResponse build = RecruitingChallengeResponse.builder()
                .participantList(itemList)
                .build();
        return OK(build);
    }

    @GetMapping("/{id}/progress")
    public ApiResult<ProgressingChallengeResponse> getProgressingChallenge(
            @PathVariable("id") Long challengeId
    ) {
        ArrayList<ParticipantInfo> itemList = new ArrayList<>();
        itemList.add(new ParticipantInfo());
        ProgressingChallengeResponse build = ProgressingChallengeResponse.builder()
                .participantList(itemList)
                .build();
        return OK(build);
    }

    @PostMapping("/transfer")
    public ApiResult<Void> startChallenge(
            @RequestBody ChallengeTransferRequest challengeTransferRequest
    ) {
        return OK(null);
    }

}
