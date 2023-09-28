package com.ts.taesan.domain.transaction.service.dto.response;

import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class ReceiptDTO {
    private String productName;
    private Integer count;
    private Long price;
    private String category;
}
