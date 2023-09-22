package com.taesan.mydata.domain.bank.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String memberCi;

    private Date issueDate;

    private String accountNum;

    private String currencyCode;

    private Integer savingMethod;

    private Date expDate;

    private Double commitAmt;

    private Double monthlyPaidInAmt;

    private Double balanceAmt;

    private Double withdrawableAmt;

    private Double offered_rate;

    private Integer lastPaidInCnt;

}
