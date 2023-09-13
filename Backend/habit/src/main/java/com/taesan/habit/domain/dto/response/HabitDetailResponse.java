package com.taesan.habit.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HabitDetailResponse {

    @JsonProperty("totalSaving")
    Integer totalSaving;

    @JsonProperty("averageBuying")
    Integer averageBuying;

    @JsonProperty("created")
    Integer created;

    @JsonProperty("ended")
    Integer ended;

}
