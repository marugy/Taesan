package com.taesan.challenge.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ChallengeInfo {

    @JsonProperty("challenge_id")
    Long challenge_id;

    @JsonProperty("title")
    String title;

    @JsonProperty("start_date")
    LocalDate start_date;

    @JsonProperty("end_date")
    LocalDate end_date;

    @JsonProperty("target_money")
    Long target_money;

    @JsonProperty("remain_money")
    Long remain_money;

}
