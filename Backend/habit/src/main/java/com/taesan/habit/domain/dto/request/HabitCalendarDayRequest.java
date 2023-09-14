package com.taesan.habit.domain.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class HabitCalendarDayRequest {

    @JsonProperty("year")
    String year;

    @JsonProperty("month")
    String month;

    @JsonProperty("day")
    String day;

}
