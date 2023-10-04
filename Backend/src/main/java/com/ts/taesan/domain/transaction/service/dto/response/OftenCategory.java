package com.ts.taesan.domain.transaction.service.dto.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class OftenCategory {
    private String category;
    private Long count;
    private Long money;
    private Long dateMoney; // 돈을 30일로 나눈 하루 금액
    private int type; //0이면 장소, 1이면 카테고리
}
