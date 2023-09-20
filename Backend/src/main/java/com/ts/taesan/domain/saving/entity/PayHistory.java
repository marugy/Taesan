package com.ts.taesan.domain.saving.entity;

import com.ts.taesan.global.entity.BaseEntity;

import javax.persistence.*;

public class PayHistory extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "saving_id")
    private Saving saving;

    @Column(name = "trans_type")
    private Integer transType;
    @Column(name = "trans_Amt")
    private Long transAmount;
}
