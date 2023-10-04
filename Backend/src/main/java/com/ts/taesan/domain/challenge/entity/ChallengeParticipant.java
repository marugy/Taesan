package com.ts.taesan.domain.challenge.entity;

import com.ts.taesan.domain.challenge.service.dto.ChallengeStartRequest;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.global.entity.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SuperBuilder
@DynamicInsert
public class ChallengeParticipant extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "challenge_id")
    private Challenge challenge;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
    private Long spare;
    @ColumnDefault("false")
    private Boolean isExchange;

    public ChallengeParticipant(ChallengeStartRequest challengeStartRequest, Challenge challenge) {
        this.member = challenge.getMember();
        this.challenge = challenge;
        this.spare = challengeStartRequest.getPrice();
    }

    public ChallengeParticipant(Member member, Challenge challenge) {
        this.member = member;
        this.challenge = challenge;
        this.spare = challenge.getPrice();
    }

    public void changeSpare(Long money) {
        this.spare -= money;
        if (this.spare < 0L) {
            this.spare = 0L;
        }
    }

    public void settle() {
        this.isExchange = true;
    }
}
