package com.taesan.challenge.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ProgressingChallengeResponse {

    @JsonProperty("title")
    String title;

    @JsonProperty("remain_period")
    LocalDate remainPeriod;

    @JsonProperty("remain_money")
    Long remainMoney;

    @JsonProperty("participant_list")
    List<ParticipantInfo> participantList;

}
