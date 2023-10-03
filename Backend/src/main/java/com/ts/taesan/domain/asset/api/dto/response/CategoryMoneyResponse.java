package com.ts.taesan.domain.asset.api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CategoryMoneyResponse {
    private Integer category;
    private Long totalMoney;
}
