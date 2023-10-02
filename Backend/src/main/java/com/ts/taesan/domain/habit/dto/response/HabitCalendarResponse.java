package com.ts.taesan.domain.habit.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class HabitCalendarResponse {

    private int year;
    private int month;
    private int day;
    private Long saving;

}
