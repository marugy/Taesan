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
public class HabitSavingInfo {

    @JsonProperty("habitName")
    String habitName;

    @JsonProperty("habitSaving")
    String habitSaving;

}
