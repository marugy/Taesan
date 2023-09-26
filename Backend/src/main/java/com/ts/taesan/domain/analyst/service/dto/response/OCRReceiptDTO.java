package com.ts.taesan.domain.analyst.service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static lombok.AccessLevel.PUBLIC;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = PUBLIC)
public class OCRReceiptDTO {
    private String name;
    private Long sumPrice;
    private Long unitPrice;

}
