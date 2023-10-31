package com.taesan.mydata.domain.card.api.dto.request;

import lombok.*;

import java.time.LocalDateTime;

import static lombok.AccessLevel.PROTECTED;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = PROTECTED)
public class TransactionRequest {

    private Long cardId; // 속한 카드 Id

    private String approvedNum; // 거래내역의 승인 Id

    private Long cardHistoryId;

    private LocalDateTime dateTime; // 거래내역 날짜

    private String shopName; // 상호명

    private Long approvedAmount; // 승인 금액

    private String category; // 카테고리

    private String cardType; // 신용인지, 체크인지

    private String shopNumber;

    @Builder
    public TransactionRequest(Long cardId, String approvedNum, Long cardHistoryId, String shopName, Long approvedAmount, String category, String cardType, String shopNumber) {
        this.cardId = cardId;
        this.approvedNum = "12345678";
        this.cardHistoryId = cardHistoryId;
        this.dateTime = LocalDateTime.now();
        this.shopName = shopName;
        this.approvedAmount = approvedAmount;
        this.category = category;
        this.cardType = cardType;
        this.shopNumber = "1209120912";
    }

}
