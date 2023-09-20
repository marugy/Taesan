package com.marugy.app.domain.Member.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Address {
    private String address;
    @Column(name = "address_detail")
    private String addressDetail;
    private String zipCode;

}
