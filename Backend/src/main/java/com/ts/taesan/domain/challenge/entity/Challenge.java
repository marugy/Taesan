package com.ts.taesan.domain.challenge.entity;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.global.entity.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import net.bytebuddy.implementation.bind.annotation.Super;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SuperBuilder
@DynamicInsert
@ToString
public class Challenge extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "creator_id")
    private Member member;
    private String title;
    private int period;
    private Date startDate;
    private Date endDate;
    private Long price;
    private int state; // 0이면 모집중, 1이면 진행중, 2면 종료
    private String uuid;

    public void start() {
        this.state = 1;
        this.startDate = new Date();
        this.endDate = new Date(new Date().getTime() + (long) period * 1000 * 60 * 60 * 24);
    }
}
