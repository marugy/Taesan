package com.taesan.mydata.domain.card.repository;

import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import com.taesan.mydata.domain.card.api.dto.inner.CardTransactionList;
import com.taesan.mydata.domain.card.api.dto.response.CardInfoResponse;
import com.taesan.mydata.domain.card.api.dto.response.CardTransactionListResponse;
import com.taesan.mydata.domain.card.entity.CardHistory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.taesan.mydata.domain.card.entity.QCardHistory.cardHistory;

@Repository
@RequiredArgsConstructor
public class CardHistoryQueryRepository {

    private final JPAQueryFactory queryFactory;

    public List<CardTransactionList> findCardTransactionList(long cardId, long cursor, int limit) {
        return queryFactory.select(Projections.constructor(CardTransactionList.class,
                        cardHistory.approvedNum.as("approved_num"),
                        cardHistory.approvedDtime.as("approved_dtime"),
                        cardHistory.status.as("status"),
                        cardHistory.payType.as("pay_type"),
                        cardHistory.transDtime.as("trans_dtime"),
                        cardHistory.merchantName.as("merchant_name"),
                        cardHistory.merchantRegno.as("merchant_regno"),
                        cardHistory.approvedAmt.as("approved_amt"),
                        cardHistory.modifiedAmt.as("modified_amt"),
                        cardHistory.totalInstallCnt.as("total_install_cnt")
        ))
                .from(cardHistory)
                .where(
                        cardHistory.card.id.eq(cardId).and(cursorId(cursor))
                )
                .orderBy(new OrderSpecifier<>(Order.DESC, cardHistory.id))
                .limit(limit)
                .fetch();
    }

    private BooleanExpression cursorId(Long cursorId){
        return cursorId == null ? null : cardHistory.id.gt(cursorId);
    }

}
