package com.ts.taesan.domain.transaction.entity;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.List;

import static javax.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
// 영수증에 대한 Entity
public class Receipt {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "id")
    private Transaction transaction; // 영수증이 속한 거래내역 참조


    @OneToMany(mappedBy = "receipt", cascade = CascadeType.ALL)
    private List<ReceiptList> products; // 영수증의 상세목록

    @Builder
    public Receipt(Long id, Transaction transaction, List<ReceiptList> products) {
        this.id = id;
        this.transaction = transaction;
        this.products = products;
    }
}
