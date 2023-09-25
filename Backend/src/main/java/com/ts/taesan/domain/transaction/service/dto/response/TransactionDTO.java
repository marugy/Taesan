package com.ts.taesan.domain.transaction.service.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class TransactionDTO {
    private Long transactionId;
    private Long approvedId;
    private LocalDateTime dateTime;
    private Long approvedAmount;
    private Long afterTransAmt;
    private String shopName;
    private String category;
    private Character cardType;
    private String shopNumber;
}


