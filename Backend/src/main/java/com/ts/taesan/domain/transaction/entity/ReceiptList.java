package com.ts.taesan.domain.transaction.entity;

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
public class ReceiptList {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "receipt_id")
    private Receipt receipt;

    private String name;

    private String category;

    private Integer count;

    private Long price;
}
