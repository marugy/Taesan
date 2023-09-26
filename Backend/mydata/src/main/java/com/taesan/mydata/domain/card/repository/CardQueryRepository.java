package com.taesan.mydata.domain.card.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountDetail;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountInfo;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountList;
import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import com.taesan.mydata.domain.card.api.dto.response.CardInfoResponse;
import com.taesan.mydata.domain.card.entity.Card;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

import static com.taesan.mydata.domain.bank.entity.QAccount.account;
import static com.taesan.mydata.domain.card.entity.QCard.card;

@Repository
@RequiredArgsConstructor
public class CardQueryRepository {

    private final JPAQueryFactory queryFactory;

    public List<CardList> findCardListByCardId(long memberCi, long cursor, int limit) {
        return queryFactory.select(Projections.constructor(CardList.class,
                        card.id.as("card_id"),
                        card.cardNum.as("card_num"),
                        card.isConsent.as("is_consent"),
                        card.cardName.as("card_name"),
                        card.cardMember.as("card_member"),
                        card.cardType.as("card_type")
        ))
                .from(card)
                .where(
                        card.memberCi.eq(memberCi).and(cursorId(cursor))
                )
                .limit(limit)
                .fetch();
    }

    public CardInfoResponse findCardInfoById(long cardId) {
        return queryFactory
                .select(Projections.constructor(CardInfoResponse.class,
                        Expressions.asBoolean(true).as("is_trans_payable"),
                        Expressions.asBoolean(true).as("is_cash_card"),
                        Expressions.asString("SSAFY_BANK").as("linked_bank_code"),
                        Expressions.asString("I01").as("card_brand"),
                        card.annualFee.as("annual_fee"),
                        card.issueDate.as("issue_date")
                ))
                .from(card)
                .where(
                        card.id.eq(cardId)
                )
                .fetchFirst();
    }

    private BooleanExpression cursorId(Long cursorId){
        return cursorId == null ? null : card.id.gt(cursorId);
    }

}
