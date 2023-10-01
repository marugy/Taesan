package com.ts.taesan.domain.transaction.entity;

import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
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

    public Transaction(CardHistoryList history, Long cardId, String category) {
        this.cardId = cardId;
        this.category = category;
        this.approvedNum = history.getApprovedNum();
        this.cardHistoryId = history.getId();
        this.dateTime = history.getApprovedDtime().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
        this.shopName = history.getMerchantName();
        this.shopNumber = history.getMerchantRegno();
        this.approvedAmount = history.getApprovedAmt();
        this.cardType = history.getPayType();
    }

}
