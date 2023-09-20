package com.ts.taesan.domain.member.Dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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

}
