package com.ts.taesan.domain.member.dto.request;

import com.ts.taesan.domain.member.entity.Address;
import com.ts.taesan.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Builder
@AllArgsConstructor
@Data
public class MemberModifyRequest {
    private String email;
    private Address address;

    public Member toEntity(Long id, String email, Address address) {
        return Member.builder()
                .email(email)
                .address(address)
                .build();
    }
}
