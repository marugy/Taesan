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
public class Receipt {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "id")
    private Transaction transaction;

    @NotNull
    private String shopName;

    @NotNull
    private LocalDateTime transactionDate;

    @OneToMany(mappedBy = "receipt", cascade = CascadeType.ALL)
    private List<ReceiptList> products;

    @Builder
    public Receipt(Long id, Transaction transaction, String shopName, LocalDateTime transactionDate, List<ReceiptList> products) {
        this.id = id;
        this.transaction = transaction;
        this.shopName = shopName;
        this.transactionDate = transactionDate;
        this.products = products;
    }
}
