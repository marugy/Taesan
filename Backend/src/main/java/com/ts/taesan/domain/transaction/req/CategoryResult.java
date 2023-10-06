package com.ts.taesan.domain.transaction.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryResult {
    private String productName;
    private Long price;
    private String category;

}
