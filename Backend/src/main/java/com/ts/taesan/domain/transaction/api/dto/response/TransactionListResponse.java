package com.ts.taesan.domain.transaction.api.dto.response;

import com.ts.taesan.domain.transaction.service.dto.response.Card;
import com.ts.taesan.domain.transaction.service.dto.response.Transaction;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class TransactionListResponse {
    String cursor;
    Card card;
    String historyNum;
    List<Transaction> transactionList;
}
