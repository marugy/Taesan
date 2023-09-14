package com.taesan.challenge.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParticipantInfo {

    @JsonProperty("member_id")
    Long member_id;

    @JsonProperty("name")
    String name;

    @JsonProperty("remaining_percent")
    LocalDate remainingPercent;

}
