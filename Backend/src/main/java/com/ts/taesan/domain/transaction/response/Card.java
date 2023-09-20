package com.ts.taesan.domain.transaction.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class Card {
    String cardNumber;
    String name;
    String cardCompany;
}
