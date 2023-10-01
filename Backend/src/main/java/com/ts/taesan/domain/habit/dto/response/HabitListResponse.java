package com.ts.taesan.domain.habit.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class HabitListResponse {
    private Long habitId;
    private String title;
    private String habitName;
    private LocalDateTime startDate;
    private Long saving;

//    public ProgressHabitResponse(String title, String habitName, Date startDate) {
//        this.title = title;
//        this.habitName = habitName;
//        this.startDate = startDate;
//    }
}
