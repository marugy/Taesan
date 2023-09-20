package com.taesan.transaction.domain.service.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

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

}
