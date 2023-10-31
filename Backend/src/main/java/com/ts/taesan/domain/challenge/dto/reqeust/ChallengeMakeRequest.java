package com.ts.taesan.domain.challenge.dto.reqeust;

import com.ts.taesan.domain.challenge.entity.Challenge;
import com.ts.taesan.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChallengeMakeRequest {
    private String title;
    private int period;
    private Long price;

//    public Challenge toEntity(Member member) {
//        return Challenge.builder()
//                .title(this.title)
//                .member(member)
//                .period(this.period)
//                .price(this.price)
//                .build();
//    }
}
