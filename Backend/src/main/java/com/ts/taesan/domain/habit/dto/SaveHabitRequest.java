package com.ts.taesan.domain.habit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SaveHabitRequest {
    List<Long> habitIds;
}
