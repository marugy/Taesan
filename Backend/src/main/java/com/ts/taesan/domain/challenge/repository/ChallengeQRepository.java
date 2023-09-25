package com.ts.taesan.domain.challenge.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.ts.taesan.domain.challenge.entity.QChallenge.*;
import static com.ts.taesan.domain.challenge.entity.QChallengeParticipant.challengeParticipant;
import static com.ts.taesan.domain.member.entity.QMember.member;

import com.ts.taesan.domain.challenge.dto.response.*;
import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import com.ts.taesan.domain.member.entity.QMember;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Slf4j
public class ChallengeQRepository {
    private final JPAQueryFactory queryFactory;

    public ChallengeQRepository(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    public ChallengeMakeResponse getState(Long memberId) {
        return queryFactory
                .select(Projections.constructor(ChallengeMakeResponse.class,
                        challenge.id,
                        challenge.state
                ))
                .from(challenge)
                .where(challenge.id.eq(memberId).and(challenge.state.eq(0).or(challenge.state.eq(1))))
                .fetchFirst();
    }

    public List<ChallengeResponse> getEndChallenge(Long memberId) {
        return queryFactory
                .select(Projections.constructor(ChallengeResponse.class,
                        challenge.id,
                        challenge.title,
                        challenge.price,
                        challenge.createDate,
                        challenge.period
                ))
                .from(challenge)
                .where(challenge.member.id.eq(memberId).and(challenge.state.eq(2)))
                .fetch();
    }

    public ChallengeInfoResponse getDetailInfo(Long challengeId) {
        return queryFactory
                .select(Projections.constructor(ChallengeInfoResponse.class,
                        challenge.title,
                        challenge.price,
                        challenge.period,
                        challenge.uuid
                ))
                .from(challenge)
                .where(challenge.id.eq(challengeId))
                .fetchFirst();
    }

    public List<ParticipantResponse> getParticipants(Long challengeId) {
        List<ParticipantResponse> participants = queryFactory
                .select(Projections.constructor(ParticipantResponse.class,
                        challengeParticipant.member.name,
                        challengeParticipant.spare
                ))
                .from(challengeParticipant)
                .join(challengeParticipant.member, member)
                .where(challengeParticipant.challenge.id.eq(challengeId))
                .fetch();
        return participants;
    }
}
