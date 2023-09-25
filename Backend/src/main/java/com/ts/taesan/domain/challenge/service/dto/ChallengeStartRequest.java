package com.ts.taesan.domain.challenge.service.dto;

import com.ts.taesan.domain.challenge.dto.reqeust.ChallengeMakeRequest;
import com.ts.taesan.domain.challenge.entity.Challenge;
import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
import com.ts.taesan.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeStartRequest {
    private String title;
    private Date period;
    private Long price;
    private Member member;

    public ChallengeStartRequest(Member member, ChallengeMakeRequest challengeMakeRequest) {
        this.title = challengeMakeRequest.getTitle();
        this.period = new Date(new Date().getTime() + challengeMakeRequest.getPeriod() * 1000 * 60 * 60 * 24);
        this.price = challengeMakeRequest.getPrice();
        this.member = member;
    }

    public Challenge toEntity() {
        return Challenge.builder()
                .title(this.title)
                .member(this.member)
                .period(this.period)
                .price(this.price)
                .build();
    }
}
