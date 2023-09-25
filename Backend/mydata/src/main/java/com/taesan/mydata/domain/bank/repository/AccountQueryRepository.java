package com.taesan.mydata.domain.bank.repository;

import com.querydsl.core.types.Expression;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountList;
import com.taesan.mydata.domain.bank.api.dto.response.AccountListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.taesan.mydata.domain.bank.entity.QAccount.account;

@Repository
@RequiredArgsConstructor
public class AccountQueryRepository {

    private final JPAQueryFactory queryFactory;

    public List<AccountList> findAccountListByMemberCi(long memberCi, long cursor, int limit) {
        return queryFactory
                .select(Projections.constructor(AccountList.class,
                        account.accountNum.as("account_num"),
                        Expressions.asBoolean(true).as("is_consent"),
                        Expressions.asString("더미계좌1").as("prod_name"),
                        Expressions.asString("1001").as("account_type"),
                        Expressions.asString("01").as("account_status")
                ))
                .from(account)
                .where(
                        account.memberCi.eq(memberCi).and(cursorId(cursor))
                )
                .limit(limit)
                .fetch();
    }

    private BooleanExpression cursorId(Long cursorId){
        return cursorId == null ? null : account.id.gt(cursorId);
    }

}
