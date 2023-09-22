package com.taesan.mydata.domain.card.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;

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

    private String approvedDtime;

    private String status;

    private String payType;

    private Date transDtime;

    private String merchantName;

    private String merchantRegno;

    private Long modifiedAmt;

    private String totalInstallCnt;

}
