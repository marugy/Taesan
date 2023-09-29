package com.ts.taesan.domain.tikkle.entity;

import com.ts.taesan.global.entity.BaseEntity;

import javax.persistence.*;

public class PayHistory extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tikkle_id")
    private Tikkle tikkle;

    @Column(name = "trans_type")
    private Integer transType;

    @Column(name = "trans_amt")
    private Long transAmount;

}
