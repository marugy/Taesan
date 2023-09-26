package com.taesan.mydata.domain.bank.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long memberCi;

    private Date issueDate;

    private String accountNum;

    private String currencyCode;

    private String savingMethod;

    private Date expDate;

    private Double commitAmt;

    private Double monthlyPaidInAmt;

    private Double balanceAmt;

    private Double withdrawableAmt;

    private Double offeredRate;

    private Integer lastPaidInCnt;

}
