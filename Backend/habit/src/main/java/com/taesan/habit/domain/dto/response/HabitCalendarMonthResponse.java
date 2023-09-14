package com.taesan.habit.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class HabitCalendarMonthResponse {

    @JsonProperty("totalSavingMoney")
    String totalSavingMoney;

    @JsonProperty("dayList")
    List<DayInfo> dayList;

}
