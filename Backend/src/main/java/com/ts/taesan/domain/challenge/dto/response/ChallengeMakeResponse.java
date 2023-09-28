package com.ts.taesan.domain.challenge.dto.response;

import lombok.*;

@Data
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeMakeResponse {
    private Long challengeId;
    private int state;
}
