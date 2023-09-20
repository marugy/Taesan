package com.ts.taesan.domain.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@Getter
@NoArgsConstructor
@SuperBuilder
@DynamicInsert
public class Address {
    private String address;
    @Column(name = "address_detail")
    private String addressDetail;
    private String zipCode;

}
