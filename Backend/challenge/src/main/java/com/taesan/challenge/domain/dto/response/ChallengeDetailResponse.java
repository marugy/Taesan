package com.taesan.challenge.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ChallengeDetailResponse {

    @JsonProperty("challenge_id")
    Long challengeId;

    @JsonProperty("title")
    String title;

    @JsonProperty("start_date")
    LocalDate startDate;

    @JsonProperty("end_date")
    LocalDate endDate;

    @JsonProperty("target_money")
    Long targetMoney;

    @JsonProperty("remain_money")
    Long remainMoney;

    @JsonProperty("participant_list")
    List<ParticipantInfo> participantList;

}
