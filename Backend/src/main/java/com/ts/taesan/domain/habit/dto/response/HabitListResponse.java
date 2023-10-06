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
    private LocalDateTime endDate;
    private Long savingCnt;

    public HabitListResponse(Long habitId, String title, String habitName, LocalDateTime startDate, Long saving) {
        this.habitId = habitId;
        this.title = title;
        this.habitName = habitName;
        this.startDate = startDate;
        this.saving = saving;
    }

    public HabitListResponse(Long habitId, String title, String habitName, LocalDateTime startDate, Long saving, LocalDateTime endDate) {
        this.habitId = habitId;
        this.title = title;
        this.habitName = habitName;
        this.startDate = startDate;
        this.saving = saving;
        this.endDate = endDate;
    }


    public void updateSavingCnt(Long cnt) {
        this.savingCnt = cnt;
    }
}
