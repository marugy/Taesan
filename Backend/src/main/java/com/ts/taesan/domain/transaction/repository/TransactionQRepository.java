package com.ts.taesan.domain.transaction.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ts.taesan.domain.transaction.service.dto.response.Receipt;
import com.ts.taesan.domain.transaction.service.dto.response.RecentTransaction;
import com.ts.taesan.domain.transaction.service.dto.response.Transaction;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import static com.ts.taesan.domain.transaction.entity.QTransaction.transaction;
import static com.ts.taesan.domain.transaction.entity.QReceipt.receipt;
import static com.ts.taesan.domain.transaction.entity.QReceiptList.receiptList;

import java.time.LocalDate;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class TransactionQRepository {

    private final JPAQueryFactory queryFactory;

    public List<Transaction> findTransactionListByCardId(Long id, Integer cursor, Integer limit){
        return queryFactory.select(Projections.fields(Transaction.class,
                transaction.id.as("transactionId"), transaction.approvedId, transaction.dateTime,
                transaction.approvedAmount, transaction.afterTransAmt, transaction.shopName, transaction.category))
                .from(transaction).where(transaction.cardId.eq(id)).offset(cursor).limit(limit).orderBy(transaction.dateTime.desc()).fetch();
    }

    public Transaction findTransactionDetailByCardId(Long id){
        return queryFactory.select(Projections.fields(Transaction.class,
                transaction.id.as("transactionId"), transaction.approvedId, transaction.dateTime,
                transaction.approvedAmount, transaction.afterTransAmt, transaction.shopName, transaction.category,
                transaction.cardType, transaction.shopNumber)).from(transaction).where(transaction.id.eq(id)).fetchFirst();
    }

    public RecentTransaction findRecentTransactionByCardId(Long id, LocalDate startDate){
        return queryFactory.select(Projections.fields(RecentTransaction.class, transaction.count().as("count"), transaction.approvedAmount.sum().as("sum")
                )).from(transaction).where(transaction.id.eq(id).and(transaction.dateTime.after(startDate.atStartOfDay()))).fetchFirst();
    }

    public List<Transaction> findTransactionListByMonth(Long id, LocalDate startDate, LocalDate endDate, String category){
        return queryFactory.select(Projections.fields(Transaction.class,
                        transaction.id.as("transactionId"), transaction.approvedId, transaction.dateTime,
                        transaction.approvedAmount, transaction.afterTransAmt, transaction.shopName, transaction.category))
                .from(transaction).where(transaction.cardId.eq(id).and(transaction.category.eq(category)
                        .and(transaction.dateTime.between(startDate.atStartOfDay(), endDate.atTime(23,59,59))))).fetch();
    }

    public List<Receipt> findReceiptsByMonth(Long id, LocalDate startDate, LocalDate endDate, String category){
        return queryFactory.select(Projections.fields(Receipt.class,
                receipt.products
                )).from(receiptList).where(receiptList.receipt.transaction.cardId.eq(id)
                .and(receiptList.category.eq(category).and(receiptList.receipt.transactionDate
                        .between(startDate.atStartOfDay(), endDate.atTime(23,59,59))))).fetch();
    }



}
