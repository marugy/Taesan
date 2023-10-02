package com.ts.taesan.domain.challenge.service;

import com.ts.taesan.domain.asset.service.AssetService;
import com.ts.taesan.domain.challenge.dto.response.*;
import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
import com.ts.taesan.domain.challenge.repository.ChallengeParticipantRepository;
import com.ts.taesan.domain.challenge.repository.ChallengeRepository;
import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import com.ts.taesan.domain.challenge.repository.ChallengeQRepository;
import com.ts.taesan.domain.challenge.service.dto.ExpiredChallengeInfoResponse;
import com.ts.taesan.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.ts.taesan.domain.member.entity.QMember.member;

@Service
@RequiredArgsConstructor
@Transactional
public class ChallengeQService {

    private final ChallengeQRepository challengeQRepository;
    private final ChallengeParticipantRepository challengeParticipantRepository;
    private final AssetService assetService;

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

    public ChallengeRecruitDetailResponse getRecruitChallengeDetail(String name, Long challengeId) {
        ChallengeInfoResponse challengeInfoResponse = challengeQRepository.getDetailInfo(challengeId);
        List<String> participants = challengeQRepository.getParticipantsName(challengeId);
        ChallengeRecruitDetailResponse challengeRecruitDetailResponse = new ChallengeRecruitDetailResponse(name, challengeInfoResponse, participants);
        return challengeRecruitDetailResponse;
    }

    public ChallengeProgressDetailResponse getProgressChallengeDetail(Member member, Long challengeId) {
        ChallengeInfoResponse challengeInfoResponse = challengeQRepository.getDetailInfo(challengeId);
        ChallengeParticipant challengeParticipant = challengeParticipantRepository.findByMemberIdAndChallengeId(member.getId(), challengeId).orElseThrow();
        List<ParticipantResponse> participants = challengeQRepository.getParticipants(challengeId);
        ChallengeProgressDetailResponse challengeProgressDetailResponse = new ChallengeProgressDetailResponse(member.getName(), challengeParticipant.getSpare(), challengeInfoResponse, participants);
        return challengeProgressDetailResponse;
    }

    public ChallengeExpiredDetailResponse getExpiredChallengeDetail(Member member, Long challengeId) {
        ExpiredChallengeInfoResponse expiredChallengeInfoResponse = challengeQRepository.getExpiredDetailInfo(challengeId);
        ChallengeParticipant challengeParticipant = challengeParticipantRepository.findByMemberIdAndChallengeId(member.getId(), challengeId).orElseThrow();
        List<ParticipantResponse> participants = challengeQRepository.getParticipants(challengeId);
        ChallengeExpiredDetailResponse challengeExpiredDetailResponse = new ChallengeExpiredDetailResponse(challengeParticipant.getSpare(), expiredChallengeInfoResponse, participants);
        return challengeExpiredDetailResponse;
    }

    public void saveMoney(Long challengeId, Long memberId) {
        ChallengeParticipant challengeParticipant = challengeParticipantRepository.findByMemberIdAndChallengeId(challengeId, memberId).orElseThrow();
        if (!challengeParticipant.getIsExchange()) {        // 이미 바꿔먹은거 또 바꾸려 하면
            throw new RuntimeException();
        }

        challengeParticipant.settle();
        assetService.saveMoney(memberId, challengeParticipant.getSpare(), 3);
    }

}
