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
public class HabitTodayInfo {

    @JsonProperty("habitId")
    Long habitId;

    @JsonProperty("habitName")
    String habitName;

    @JsonProperty("money")
    Integer habitSaving;

}
