package com.ts.taesan.domain.asset.api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TikkleCategoryResponse {
    private Long ifbuy;
    private Long habit;
    private Long challenge;
    private Long total;
}
