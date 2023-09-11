package com.taesan.transaction.domain.api.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class CardResponse {
    String cardNumber;
    String name;
    String cardCompany;
    List<TransactionsResponse> transactions;
}
