package com.ts.taesan.domain.challenge.service;

import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeRequest;
import com.ts.taesan.domain.challenge.repository.ChallengeRepository;
import com.ts.taesan.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ChallengeService {

    private final ChallengeRepository challengeRepository;

    public void save(Member member, ChallengeMakeRequest challengeMakeRequest) {
        challengeRepository.save(challengeMakeRequest.toEntity(member));
    }
}
