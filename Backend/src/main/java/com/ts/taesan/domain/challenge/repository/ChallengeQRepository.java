package com.ts.taesan.domain.challenge.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.ts.taesan.domain.challenge.entity.QChallenge.*;

import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

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
}
