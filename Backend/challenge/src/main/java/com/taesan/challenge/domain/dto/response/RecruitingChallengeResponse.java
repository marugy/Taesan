package com.taesan.challenge.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class RecruitingChallengeResponse {

    @JsonProperty("title")
    String title;

    @JsonProperty("period")
    LocalDate period;

    @JsonProperty("price")
    Long price;

    @JsonProperty("code")
    String code;

    @JsonProperty("participant_list")
    List<ParticipantInfo> participantList;

}
