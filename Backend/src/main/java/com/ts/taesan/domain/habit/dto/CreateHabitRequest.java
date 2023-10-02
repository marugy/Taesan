package com.ts.taesan.domain.habit.dto;

import com.ts.taesan.domain.habit.entity.Habit;
import com.ts.taesan.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CreateHabitRequest {
    private String title;
    private String habitName;
    private int targetMoney;

    public Habit toEntity(Member member) {
        return Habit.builder()
                .member(member)
                .title(this.title)
                .habitName(this.habitName)
                .targetMoney(this.targetMoney)
                .build();
    }
}
