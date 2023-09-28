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
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeStartRequest {
    private String title;
    private int period;
    private Long price;
    private Member member;
    private String uuid;

    public ChallengeStartRequest(Member member, ChallengeMakeRequest challengeMakeRequest) {
        this.title = challengeMakeRequest.getTitle();
        this.period = challengeMakeRequest.getPeriod();
        this.price = challengeMakeRequest.getPrice();
        this.member = member;
        this.uuid = UUID.randomUUID().toString();
    }

    public Challenge toEntity() {
        return Challenge.builder()
                .title(this.title)
                .member(this.member)
                .period(this.period)
                .price(this.price)
                .uuid(this.uuid)
                .build();
    }
}
