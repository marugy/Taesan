package com.ts.taesan.domain.transaction.service.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class OftenCategory {
    private String category;
    private Integer count;
    private Long money;
    private Long dateMoney; // 돈을 30일로 나눈 하루 금액

}
