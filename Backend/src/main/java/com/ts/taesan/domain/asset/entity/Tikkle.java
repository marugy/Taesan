package com.ts.taesan.domain.asset.entity;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.global.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@Entity
@Getter
@SuperBuilder
@DynamicInsert
public class Tikkle extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(name = "money")
    private Long money;

    @Column(name = "end_date")
    private Date endDate;

}
