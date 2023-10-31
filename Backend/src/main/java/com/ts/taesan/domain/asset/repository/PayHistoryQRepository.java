package com.ts.taesan.domain.asset.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ts.taesan.domain.asset.api.dto.response.CategoryMoneyResponse;
import com.ts.taesan.domain.asset.api.dto.response.PayHistoryResponse;
import com.ts.taesan.domain.asset.api.dto.response.TikkleCategoryResponse;
import org.hibernate.criterion.Projection;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.ts.taesan.domain.asset.entity.QPayHistory.payHistory;
import static com.ts.taesan.domain.asset.entity.QTikkle.tikkle;
import static com.ts.taesan.domain.member.entity.QMember.member;

@Repository
@Transactional
public class PayHistoryQRepository {

    private final JPAQueryFactory queryFactory;

    public PayHistoryQRepository(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    public List<PayHistoryResponse> getPayHistories(Long memberId) {
        List<PayHistoryResponse> payHistoryResponses = queryFactory.select(Projections.constructor(PayHistoryResponse.class,
                        payHistory.createDate,
                        payHistory.transAmount,
                        payHistory.totalAmount
                ))
                .from(payHistory)
                .join(tikkle).on(payHistory.tikkle.id.eq(tikkle.id))
                .join(member).on(tikkle.member.id.eq(member.id))
                .where(member.id.eq(memberId))
                .fetch();
        return payHistoryResponses;
    }

    public List<CategoryMoneyResponse> getCategoryMoney(Long memberId) {
        List<CategoryMoneyResponse> tikkleCategoryResponse = queryFactory
                .select(Projections.constructor(CategoryMoneyResponse.class,
                        payHistory.transType,
                        payHistory.transAmount.sum()
                ))
                .from(payHistory)
                .join(tikkle).on(payHistory.tikkle.id.eq(tikkle.id))
                .join(member).on(tikkle.member.id.eq(member.id))
                .where(member.id.eq(memberId))
                .groupBy(payHistory.transType)
                .orderBy(payHistory.transType.asc())
                .fetch();
        return tikkleCategoryResponse;
    }
}
