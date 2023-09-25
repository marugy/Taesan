package com.ts.taesan.domain.challenge.service;

import com.ts.taesan.domain.challenge.dto.response.ChallengeDetailResponse;
import com.ts.taesan.domain.challenge.dto.response.ParticipantResponse;
import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import com.ts.taesan.domain.challenge.dto.response.ChallengeMakeResponse;
import com.ts.taesan.domain.challenge.dto.response.ChallengeResponse;
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
        return challengeQRepository.getEndChallenge(memberId);
    }

    public ChallengeDetailResponse getChallengeDetail(Long challengeId) {
        ChallengeInfoResponse challengeInfoResponse = challengeQRepository.getDetailInfo(challengeId);
        List<ParticipantResponse> participants = challengeQRepository.getParticipants(challengeId);
        ChallengeDetailResponse challengeDetailResponse = new ChallengeDetailResponse(challengeInfoResponse, participants);
        return challengeDetailResponse;
    }
}
