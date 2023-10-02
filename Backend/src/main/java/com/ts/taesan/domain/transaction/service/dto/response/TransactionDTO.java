package com.ts.taesan.domain.transaction.service.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class TransactionDTO {
    private Long transactionId;
    private String approvedNum;
    private LocalDateTime dateTime;
    private Long approvedAmount;
    private String shopName;
    private String category;
    private String cardType;
    private String shopNumber;
}


