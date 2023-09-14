package com.taesan.habit.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompleteHabitInfo {

    @JsonProperty("habitId")
    String habitId;

    @JsonProperty("habitName")
    String habitName;

    @JsonProperty("created")
    String created;

    @JsonProperty("totalSaving")
    String totalSaving;

}
