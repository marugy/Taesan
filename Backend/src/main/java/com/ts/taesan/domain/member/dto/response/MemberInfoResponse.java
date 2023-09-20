package com.ts.taesan.domain.member.dto.response;

import com.ts.taesan.domain.member.entity.Address;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@NoArgsConstructor
@Builder
@Getter
public class MemberInfoResponse {

    private String name;
    private String phone;
    private String email;
    private Address address;

    public MemberInfoResponse(String name, String phone, String email, Address address) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}
