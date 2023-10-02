package com.ts.taesan.domain.habit.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ClearHabitResponse {
    private Long habitId;
    private String habitTitle;
    private int targetMoney;
}
