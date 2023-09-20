package com.ts.taesan.domain.member.entity;

import com.ts.taesan.global.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@SuperBuilder
@DynamicInsert
@ToString
public class Member extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true, name = "login_Id")
    private String loginId;

    @Column(nullable = false, unique = true)
    private String password;

    @Column(nullable = false, unique = true, name = "simple_password")
    private String simplePassword;

    @Column(nullable = false, unique = true)
    private String hashCode;

    @Column(nullable = false, unique = true)
    private String accountNum;

    @Column(nullable = false, unique = true)
    private String tel;

    @Embedded
    private Address address;

    @Column(nullable = true, name = "refresh_token") // 초기에는 없음
    private String refreshToken;

    // 비즈니스 로직
    public void updateRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }
    public void deleteRefreshToken() {
        this.refreshToken = null;
    }
}
