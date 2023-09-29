package com.ts.taesan.domain.member.entity;

import com.ts.taesan.domain.member.dto.request.MemberModifyRequest;
import com.ts.taesan.global.entity.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@SuperBuilder
@DynamicInsert
@ToString
public class Member extends BaseEntity implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false, unique = true, name = "login_id")
    private String loginId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, name = "simple_password")
    private String simplePassword;

    @Column(nullable = true)
    private String hashCode;

    @Column(nullable = true, unique = true, name = "account_num")
    private String accountNum;

    @Column(nullable = false)
    private String phone;

    @Embedded
    private Address address;

    @Column(nullable = true, name = "refresh_token") // 초기에는 없음
    private String refreshToken;

    public void updateMemberInfo(MemberModifyRequest memberModifyRequest) {
        this.email = memberModifyRequest.getEmail();
        this.address = memberModifyRequest.getAddress();
    }


    //////////////////////////
    // 비즈니스 로직
    public void updateRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public void deleteRefreshToken() {
        this.refreshToken = null;
    }

    public void update(MemberModifyRequest memberModifyRequest) {
        this.address = memberModifyRequest.getAddress();
        this.email = memberModifyRequest.getEmail();
    }

    public void updatePassword(String password) {
        this.password = password;
    }

    public void updateSimplePassword(String simplePassword) {
        this.simplePassword = simplePassword;
    }

    public void addAccount(String account) {
        this.accountNum = account;
    }

    ////////////////////////
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return this.phone;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
