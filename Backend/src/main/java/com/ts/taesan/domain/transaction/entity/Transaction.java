package com.ts.taesan.domain.transaction.entity;

import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import com.ts.taesan.domain.member.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import static lombok.AccessLevel.PROTECTED;
@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
// 거래내역 Entity, 카드 서버에서 가져온 거래내역에서 카테고리 정보가 추가됌
public class Transaction {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Long cardId; // 속한 카드 Id

    @NotNull
    private String approvedNum; // 거래내역의 승인 Id

    @NotNull
    private Long cardHistoryId;

    @NotNull
    private LocalDateTime dateTime; // 거래내역 날짜

    @NotNull
    private String shopName; // 상호명

    @NotNull
    private Long approvedAmount; // 승인 금액

    @NotNull
    private String category; // 카테고리

    @NotNull
    private String cardType; // 신용인지, 체크인지

    @NotNull
    private String shopNumber;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public Transaction(Long cardId, String approvedNum, Long cardHistoryId, String shopName, Long approvedAmount, String category, String cardType, String shopNumber, Member member) {
        this.cardId = cardId;
        this.approvedNum = "12345678";
        this.cardHistoryId = cardHistoryId;
        this.dateTime = LocalDateTime.now();
        this.shopName = shopName;
        this.approvedAmount = approvedAmount;
        this.category = category;
        this.cardType = cardType;
        this.shopNumber = "1209120912";
        this.member = member;
    }

    public Transaction(CardHistoryList history, Long cardId, String category, Member member) {
        this.cardId = cardId;
        this.category = category;
        this.approvedNum = history.getApprovedNum();
        this.cardHistoryId = history.getId();
        this.dateTime = new Timestamp(history.getApprovedDtime().getTime()).toLocalDateTime();
        this.shopName = history.getMerchantName();
        this.shopNumber = history.getMerchantRegno();
        this.approvedAmount = history.getApprovedAmt();
        this.cardType = history.getPayType();
        this.member = member;
    }

}
