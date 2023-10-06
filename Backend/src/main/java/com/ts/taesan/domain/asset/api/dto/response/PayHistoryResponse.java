package com.ts.taesan.domain.asset.api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PayHistoryResponse {
    private LocalDateTime createDate;
    private Long transAmount;
    private Long totalAmount;
}
