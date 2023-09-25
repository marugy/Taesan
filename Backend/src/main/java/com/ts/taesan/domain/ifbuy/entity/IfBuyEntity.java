package com.ts.taesan.domain.ifbuy.entity;

import com.ts.taesan.domain.member.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import static javax.persistence.FetchType.LAZY;
import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = PROTECTED)
public class IfBuyEntity {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @NotNull
    private String name;

    @NotNull
    private Long price;

    private String uploadFileName;
    private String storeFileName;

    public IfBuyEntity(Long id, Member member, String name, Long price, String uploadFileName, String storeFileName) {
        this.id = id;
        this.member = member;
        this.name = name;
        this.price = price;
        this.uploadFileName = uploadFileName;
        this.storeFileName = storeFileName;
    }
}
