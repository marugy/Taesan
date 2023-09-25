package com.ts.taesan.domain.challenge.entity;

import com.ts.taesan.domain.challenge.service.dto.ChallengeStartRequest;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.global.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class ChallengeParticipant extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "challenge_id")
    private Challenge challenge;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
    private Long spare;

    public ChallengeParticipant(ChallengeStartRequest challengeStartRequest, Challenge challenge) {
        this.member = challenge.getMember();
        this.challenge = challenge;
        this.spare = challengeStartRequest.getPrice();
    }
}
