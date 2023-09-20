package com.ts.taesan.domain.member.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class MemberInfoResponse {

    private String name;
    private String phone;
    private String email;
    private String address;
    private String addressDetail;
    private String zipCode;

    public MemberInfoResponse(String name, String phone, String email, String address, String addressDetail, String zipCode) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.addressDetail = addressDetail;
        this.zipCode = zipCode;
    }
}
