package com.ts.taesan.domain.transaction.api.dto.response;

import com.ts.taesan.domain.transaction.service.dto.response.RecentTransaction;
import com.ts.taesan.domain.transaction.service.dto.response.TransactionDTO;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class TransactionResponse {
    TransactionDTO transactionDTO;
    RecentTransaction recentHistories;
}
