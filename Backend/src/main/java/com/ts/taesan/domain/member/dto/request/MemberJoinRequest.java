package com.ts.taesan.domain.member.dto.request;

import com.ts.taesan.domain.member.entity.Address;
import com.ts.taesan.domain.member.entity.Member;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberJoinRequest {
    private String loginId;
    private String password; //비밀번호
    private String simplePassword; //비밀번호
    private String email; //이메일
    private String name;//이름
    private String phone; //전화번호
    private String address; //주소
    private String addressDetail; // 상세주소
    private String zipCode; //우편번호

    public Member toEntity() {
        return Member.builder()
                .loginId(this.loginId)
                .password(this.password)
                .simplePassword(this.simplePassword)
                .email(this.email)
                .name(this.name)
                .phone(this.phone)
                .address(Address.builder().address(this.address).addressDetail(this.addressDetail).zipCode(this.zipCode).build())
                .build();
    }

}
