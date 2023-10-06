package com.ts.taesan.domain.analyst.service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

import static lombok.AccessLevel.PUBLIC;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = PUBLIC)
public class OCRReceiptList {
    List<OCRReceiptDTO> list;
    Long sumPrice;
}
