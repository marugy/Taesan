package com.taesan.mydata.domain.card.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class CardHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "card_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Card card;

    private String approvedNum;

    private Date approvedDtime;

    private String status;

    private String payType;

    private Date transDtime;

    private String merchantName;

    private String merchantRegno;

    private Long approvedAmt;

    private Long modifiedAmt;

    private Integer totalInstallCnt;

}
