package com.ts.taesan.domain.challenge.service;

import com.ts.taesan.domain.challenge.dto.response.*;
import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import com.ts.taesan.domain.challenge.repository.ChallengeQRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ChallengeQService {

    private final ChallengeQRepository challengeQRepository;

    public ChallengeMakeResponse getState(Long memberId) {
        ChallengeMakeResponse challengeMakeResponse = challengeQRepository.getState(memberId);
        if (challengeMakeResponse == null) {
            challengeMakeResponse = new ChallengeMakeResponse(0L, 0);
        } else {
            challengeMakeResponse.setState(challengeMakeResponse.getState() + 1);
        }
        return challengeMakeResponse;
    }

    public List<ChallengeResponse> getEndChallenges(Long memberId) {
        List<ChallengeResponse> challengeResponses = challengeQRepository.getEndChallenge(memberId);
        return challengeResponses;
    }

    public ChallengeRecruitDetailResponse getRecruitChallengeDetail(Long challengeId) {
        ChallengeInfoResponse challengeInfoResponse = challengeQRepository.getDetailInfo(challengeId);
        List<String> participants = challengeQRepository.getParticipantsName(challengeId);
        ChallengeRecruitDetailResponse challengeRecruitDetailResponse = new ChallengeRecruitDetailResponse(challengeInfoResponse, participants);
        return challengeRecruitDetailResponse;
    }

    public ChallengeProgressDetailResponse getProgressChallengeDetail(Long challengeId) {
        ChallengeInfoResponse challengeInfoResponse = challengeQRepository.getDetailInfo(challengeId);
        List<ParticipantResponse> participants = challengeQRepository.getParticipants(challengeId);
        ChallengeProgressDetailResponse challengeProgressDetailResponse = new ChallengeProgressDetailResponse(challengeInfoResponse, participants);
        return challengeProgressDetailResponse;
    }
}
