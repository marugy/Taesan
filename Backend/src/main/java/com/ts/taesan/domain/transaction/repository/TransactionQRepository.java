package com.ts.taesan.domain.transaction.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ts.taesan.domain.analyst.service.dto.response.Info;
import com.ts.taesan.domain.ifbuy.api.dto.response.MostBuyItem;
import com.ts.taesan.domain.transaction.entity.Receipt;
import com.ts.taesan.domain.transaction.entity.ReceiptList;
import com.ts.taesan.domain.transaction.service.dto.response.OftenCategory;
import com.ts.taesan.domain.transaction.service.dto.response.ReceiptDTO;
import com.ts.taesan.domain.transaction.service.dto.response.RecentTransaction;
import com.ts.taesan.domain.transaction.service.dto.response.TransactionDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import static com.ts.taesan.domain.transaction.entity.QTransaction.transaction;
import static com.ts.taesan.domain.transaction.entity.QReceipt.receipt;
import static com.ts.taesan.domain.transaction.entity.QReceiptList.receiptList;
import static com.ts.taesan.domain.member.entity.QMember.member;

import java.time.LocalDate;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class TransactionQRepository {

    private final JPAQueryFactory queryFactory;

    public List<TransactionDTO> findTransactionListByCardId(Long id, Long cursor, Integer limit){
        return queryFactory.select(Projections.fields(TransactionDTO.class,
                transaction.id.as("transactionId"), transaction.cardHistoryId, transaction.approvedNum, transaction.dateTime,
                transaction.approvedAmount, transaction.shopName, transaction.category))
                .from(transaction)
                .where(
                        transaction.cardId.eq(id).and(ltCursor(cursor))
                )
                .orderBy(transaction.cardHistoryId.desc())
                .limit(limit + 1)
                .fetch();
    }

    public TransactionDTO findTransactionDetailByCardId(Long id){
        return queryFactory.select(Projections.fields(TransactionDTO.class,
                transaction.id.as("transactionId"), transaction.cardHistoryId, transaction.approvedNum, transaction.dateTime,
                transaction.approvedAmount, transaction.shopName, transaction.category,
                transaction.cardType, transaction.shopNumber)).from(transaction).where(transaction.id.eq(id)).fetchFirst();
    }

    public List<ReceiptDTO> findReceiptByTransactionId(Long id){
        return queryFactory.select(Projections.fields(ReceiptDTO.class,
                receiptList.price, receiptList.category, receiptList.name.as("productName"))).from(receiptList)
                .where(receiptList.receipt.transaction.id.eq(id)).fetch();
    }

    public RecentTransaction findRecentTransactionByShopName(String shopName, LocalDate startDate, Long memberId, Long cardId){
        return queryFactory.select(Projections.fields(RecentTransaction.class, transaction.count().as("count"), transaction.approvedAmount.sum().as("sum")
                )).from(transaction).where(transaction.shopName.eq(shopName).and(transaction.member.id.eq(memberId)).and(transaction.cardId.eq(cardId)).and(transaction.dateTime.after(startDate.atStartOfDay()))).fetchFirst();
    }

    public List<TransactionDTO> findTransactionListByMonth(Long id, LocalDate startDate, LocalDate endDate, String category){
        return queryFactory.select(Projections.fields(TransactionDTO.class,
                        transaction.id.as("transactionId"), transaction.cardHistoryId, transaction.approvedNum, transaction.dateTime,
                        transaction.approvedAmount, transaction.shopName, transaction.category))
                .from(transaction).where(transaction.cardId.eq(id).and(transaction.category.eq(category)
                        .and(transaction.dateTime.between(startDate.atStartOfDay(), endDate.atTime(23,59,59))))).fetch();
    }

    public List<ReceiptDTO> findReceiptsByMonth(Long id, LocalDate startDate, LocalDate endDate, String category){
        return queryFactory.select(Projections.fields(ReceiptDTO.class,
                receiptList.category, receiptList.price, receiptList.name.as("productName")
                )).from(receiptList).where(receiptList.receipt.transaction.cardId.eq(id)
                .and(receiptList.category.eq(category).and(receiptList.receipt.transaction.dateTime
                        .between(startDate.atStartOfDay(), endDate.atTime(23,59,59))))).fetch();
    }

    public List<OftenCategory> findOftenTransaction(Long id, LocalDate startDate, LocalDate endDate){
        return queryFactory.select(Projections.fields(OftenCategory.class, transaction.category,
                        transaction.dateTime.countDistinct().as("count"),transaction.approvedAmount.sum().as("money")
                )).from(transaction).where(transaction.member.id.eq(id).
                and(transaction.dateTime.between(startDate.atStartOfDay(), endDate.atTime(23,59,59))))
                .groupBy(transaction.category)
                .orderBy(transaction.count().desc()).limit(3).fetch();
    }

    public List<OftenCategory> findOftenReceipt(Long id, LocalDate startDate, LocalDate endDate){
        return queryFactory.select(Projections.fields(OftenCategory.class, receiptList.category,
                        receiptList.receipt.transaction.dateTime.countDistinct().as("count"), receiptList.price.sum().as("money")
                )).from(receiptList)
                .join(receipt).on(receiptList.receipt.id.eq(receipt.id))
                .join(transaction).on(receipt.transaction.id.eq(transaction.id))
                .join(member).on(transaction.member.id.eq(member.id))
                .where(member.id.eq(id)
                        .and(receiptList.category.eq("커피_차").or(receiptList.category.eq("과자_간식"))
                                .or(receiptList.category.eq("제과_잼")).or(receiptList.category.eq("완구"))
                                        .or(receiptList.category.eq("잡화_명품")).or(receiptList.category.eq("문구_도서"))
                                                .or(receiptList.category.eq("담배"))
                                                        .or(receiptList.category.eq("주류"))
                                                                .or(receiptList.category.eq("간편식")))
                        .and(receiptList.receipt.transaction.dateTime.between(startDate.atStartOfDay(), endDate.atTime(23,59,59))))
                .groupBy(receiptList.category)
                .orderBy(receiptList.count().desc()).limit(3).fetch();
    }

    public List<Info> findTransactionAnal(Long userId, LocalDate startDate, LocalDate endDate){
        return queryFactory.select(Projections.fields(Info.class,
                transaction.category.as("id"),
                        transaction.category.as("label"),
                        transaction.approvedAmount.sum().as("value")

                        ))
                .from(transaction)
                .where(transaction.member.id.eq(userId).and(transaction.dateTime.between(startDate.atStartOfDay(), endDate.atTime(23,59,59))))
                .groupBy(transaction.category)
                .fetch();
    }

    public List<Info> findReceiptAnal(Long userId, LocalDate startDate, LocalDate endDate){
        return queryFactory.select(Projections.fields(Info.class,
                        receiptList.category.as("id"),
                        receiptList.category.as("label"),
                        receiptList.price.sum().as("value")

                ))
                .from(receiptList)
                .join(receipt).on(receiptList.receipt.id.eq(receipt.id))
                .join(transaction).on(receipt.transaction.id.eq(transaction.id))
                .where(transaction.member.id.eq(userId).and(transaction.dateTime.between(startDate.atStartOfDay(), endDate.atTime(23,59,59))))
                .groupBy(receiptList.category)
                .fetch();
    }

    private BooleanExpression ltCursor(Long cursorId){
        return cursorId == null ? null : transaction.cardHistoryId.loe(cursorId);
    }

    public MostBuyItem findMostBuyItem(Long memberId){
        return queryFactory.select(Projections.fields(MostBuyItem.class,
                transaction.category.as("name"), transaction.approvedAmount.sum().as("price")
                )).from(transaction)
                .where(transaction.member.id.eq(memberId))
                .groupBy(transaction.category)
                .orderBy(transaction.count().desc()).fetchFirst();
    }
}
