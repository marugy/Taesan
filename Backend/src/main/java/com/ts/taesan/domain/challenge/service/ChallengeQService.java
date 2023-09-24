package com.ts.taesan.domain.challenge.service;

import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeResponse;
import com.ts.taesan.domain.challenge.repository.ChallengeQRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
