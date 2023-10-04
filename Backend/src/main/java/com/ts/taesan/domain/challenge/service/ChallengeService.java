package com.ts.taesan.domain.challenge.service;

import com.ts.taesan.domain.challenge.dto.reqeust.ParticipateRequest;
import com.ts.taesan.domain.challenge.dto.response.ChallengeMakeResponse;
import com.ts.taesan.domain.challenge.entity.Challenge;
import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
import com.ts.taesan.domain.challenge.repository.ChallengeParticipantRepository;
import com.ts.taesan.domain.challenge.repository.ChallengeQRepository;
import com.ts.taesan.domain.challenge.repository.ChallengeRepository;
import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import com.ts.taesan.domain.challenge.service.dto.ChallengeStartRequest;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ChallengeService {
    
    private final ChallengeRepository challengeRepository;
    private final ChallengeQRepository challengeQRepository;
    private final ChallengeParticipantRepository challengeParticipantRepository;

    public void save(ChallengeStartRequest challengeStartRequest) {
        Challenge challenge = challengeStartRequest.toEntity();
        challenge = challengeRepository.save(challenge);
        ChallengeParticipant challengeParticipant = new ChallengeParticipant(challengeStartRequest, challenge);
        challengeParticipantRepository.save(challengeParticipant);
    }

    public void participate(Member member, ParticipateRequest participateRequest) {
        String uuid = participateRequest.getUuid();
        System.out.println(uuid);
        Challenge challenge = challengeRepository.findChallengeByUuid(uuid).orElseThrow();
        ChallengeParticipant challengeParticipant = new ChallengeParticipant(member, challenge);
        challengeParticipantRepository.save(challengeParticipant);
    }

    public void exit(Member member, Long challengeId) {
        ChallengeParticipant challengeParticipant = challengeParticipantRepository.findByMemberIdAndChallengeId(member.getId(), challengeId).orElseThrow();
        challengeParticipantRepository.delete(challengeParticipant);
        System.out.println(challengeParticipant.getId());
    }

    public void startChallenge(Long challengeId) {
        Challenge challenge = challengeRepository.findById(challengeId).orElseThrow();
        challenge.start();
    }

    public void delete(Long challengeId) {
        Challenge challenge = challengeRepository.findById(challengeId).orElseThrow();
        challengeParticipantRepository.deleteAllByChallengeId(challengeId);
        challengeRepository.delete(challenge);
    }

    public void changeSpare(Long memberId, Long approvedAmt) {
        if(!challengeRepository.existsByMemberId(memberId)) {       // 등록된 challenge가 없을 경우
            return;
        }

        ChallengeMakeResponse challengeMakeResponse = challengeQRepository.getState(memberId);
        if (challengeMakeResponse.getState() == 1) {
            ChallengeParticipant challengeParticipant = challengeParticipantRepository.findByMemberIdAndChallengeId(memberId, challengeMakeResponse.getChallengeId()).orElseThrow();
            challengeParticipant.changeSpare(approvedAmt);
        }
    }
}
