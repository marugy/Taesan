package com.taesan.mydata.domain.bank.repository;

import com.querydsl.core.types.Expression;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountDetail;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountInfo;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountList;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountTransactionList;
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
                        account.bank.as("bank"),
                        account.prodName.as("prod_name"),
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

    public List<AccountInfo> findAccountInfoByAccountNum(String accountNum) {
        return queryFactory
                .select(Projections.constructor(AccountInfo.class,
//                        account.currencyCode.as("currency_code"),
                        account.savingMethod.as("saving_method"),
                        Expressions.asString("예금주 이름1").as("holder_name"),
                        account.issueDate.as("issue_date")
//                        account.expDate.as("exp_date")
                ))
                .from(account)
                .where(
                        account.accountNum.eq(accountNum)
                )
                .fetch();
    }

    public List<AccountDetail> findAccountDetailByAccountNum(String accountNum) {
        return queryFactory
                .select(Projections.constructor(AccountDetail.class,
                        Expressions.asString("KRW").as("currency_code"),
                        account.balanceAmt.as("balance_amt"),
                        account.withdrawableAmt.as("withdrawable_amt"),
                        account.offeredRate.as("offered_rate")
//                        account.expDate.as("last_paid_in_cnt")
                ))
                .from(account)
                .where(
                        account.accountNum.eq(accountNum)
                )
                .fetch();
    }

    private BooleanExpression cursorId(Long cursorId){
        return cursorId == null ? null : account.id.gt(cursorId);
    }

}
