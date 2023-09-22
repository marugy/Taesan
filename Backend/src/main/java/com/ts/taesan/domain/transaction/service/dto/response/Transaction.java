package com.ts.taesan.domain.transaction.service.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class Transaction {
    Long transactionId;
    Long approvedId;
    LocalDateTime dateTime;
    Long approvedAmount;
    Long afterTransAmt;
    String shopName;
    String category;
    Character cardType;
    String shopNumber;
}


