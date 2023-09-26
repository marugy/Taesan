package com.taesan.mydata.domain.card.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long memberCi;

    private Long accountId;

    private String cardNum;

    private Boolean isConsent;

    private String cardName;

    private Integer cardMember;

    private String cardType;

    private Long annualFee;

    private Long issueDate;

}
