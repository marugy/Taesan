package com.ts.taesan.domain.transaction.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class TransactionResponse {
    Transaction transaction;
    List<Transaction> recentHistories;
}
