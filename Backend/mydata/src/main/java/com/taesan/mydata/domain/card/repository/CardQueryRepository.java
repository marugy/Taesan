package com.taesan.mydata.domain.card.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountDetail;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountInfo;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountList;
import com.taesan.mydata.domain.card.entity.Card;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.taesan.mydata.domain.bank.entity.QAccount.account;

@Repository
@RequiredArgsConstructor
public class CardQueryRepository {

    private final JPAQueryFactory queryFactory;

    private BooleanExpression cursorId(Long cursorId){
        return cursorId == null ? null : account.id.gt(cursorId);
    }

}
