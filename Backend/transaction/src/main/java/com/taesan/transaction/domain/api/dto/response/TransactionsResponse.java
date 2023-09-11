package com.taesan.transaction.domain.api.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class TransactionsResponse {
    Long transactionId;
    Long approvedNum;
    LocalDateTime date;
    Long approvedAmount;
    String merchantName;
    String category;

}
