package com.ts.taesan.domain.member.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ts.taesan.domain.member.dto.response.MemberInfoResponse;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

import static com.ts.taesan.domain.member.entity.QMember.*;

@Repository
@Slf4j
public class MemberQRepository {

    private final JPAQueryFactory queryFactory;

    public MemberQRepository(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    public MemberInfoResponse findMemberById(Long id) {
        return queryFactory
                .select(Projections.constructor(MemberInfoResponse.class,
                        member.name,
                        member.phone,
                        member.email,
                        member.address
                ))
                .from(member)
                .where(member.id.eq(id))
                .fetchFirst();
    }

    public MemberInfoResponse findMemberByLoginIdAndPassword(String loginId, String password) {
        return queryFactory
                .select(Projections.constructor(MemberInfoResponse.class,
                        member.name,
                        member.phone,
                        member.email,
                        member.address
                ))
                .from(member)
                .where(member.loginId.eq(loginId), member.password.eq(password))
                .fetchFirst();
    }

    public MemberInfoResponse findMemberBySimplePassword(Long loginId, String password) {
        return queryFactory
                .select(Projections.constructor(MemberInfoResponse.class,
                        member.name,
                        member.phone,
                        member.email,
                        member.address
                ))
                .from(member)
                .where(member.id.eq(loginId), member.password.eq(password))
                .fetchFirst();
    }

}
