package com.ts.taesan.domain.challenge.service;

import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeRequest;
import com.ts.taesan.domain.challenge.entity.Challenge;
import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
import com.ts.taesan.domain.challenge.repository.ChallengeParticipationRepository;
import com.ts.taesan.domain.challenge.repository.ChallengeRepository;
import com.ts.taesan.domain.challenge.service.dto.ChallengeStartRequest;
import com.ts.taesan.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Date;

@Service
@RequiredArgsConstructor
@Transactional
public class ChallengeService {

    private final ChallengeRepository challengeRepository;
    private final ChallengeParticipationRepository challengeParticipationRepository;

    public void save(ChallengeStartRequest challengeStartRequest) {
        Challenge challenge = challengeStartRequest.toEntity();
        challenge = challengeRepository.save(challenge);
        ChallengeParticipant challengeParticipant = new ChallengeParticipant(challengeStartRequest, challenge);
        challengeParticipationRepository.save(challengeParticipant);
    }
}
