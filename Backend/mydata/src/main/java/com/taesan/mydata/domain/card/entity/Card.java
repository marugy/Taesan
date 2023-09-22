package com.taesan.mydata.domain.card.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String memberCi;

    private String cardId;

    private String cardNum;

    private Boolean isConsent;

    private String cardName;

    private Integer cardMember;

    private Integer cardType;

}
