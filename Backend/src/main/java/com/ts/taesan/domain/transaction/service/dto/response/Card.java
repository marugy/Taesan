package com.ts.taesan.domain.transaction.service.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class Card {
    private String cardNumber;
    private String name;
    private String cardCompany;
}
