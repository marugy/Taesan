package com.ts.taesan.domain.transaction.entity;

import com.ts.taesan.domain.transaction.req.CategoryResult;
import com.ts.taesan.domain.transaction.service.dto.response.ReceiptDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import static javax.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = PROTECTED)
// 영수증의 상세 품목에 대한 Entity
public class ReceiptList {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "receipt_id")
    private Receipt receipt; // 품목이 속한 영수증에 대한 참조 객체

    private String name; // 상품명

    private String category; // 상품의 카테고리

    private Long price; // 상품의 가격

    public static ReceiptList of(Receipt receipt, CategoryResult categoryResult){
        ReceiptList result = new ReceiptList();
        result.setReceipt(receipt);
        result.setName(categoryResult.getProductName());
        result.setPrice(categoryResult.getPrice());
        result.setCategory(categoryResult.getCategory());
        return result;
    }
}
