package com.ts.taesan.domain.habit.service;

import com.ts.taesan.domain.habit.dto.CreateHabitRequest;
import com.ts.taesan.domain.habit.entity.Habit;
import com.ts.taesan.domain.habit.repository.HabitRepository;
import com.ts.taesan.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class HabitService {

    private final HabitRepository habitRepository;

    public void createHabit(Member member, CreateHabitRequest createHabitRequest) {
        Habit habit = createHabitRequest.toEntity(member);
        habitRepository.save(habit);
    }

    public void endHabit(Long habitId) {
        Habit habit = habitRepository.findById(habitId).orElseThrow();
        habit.endHabit();
    }
}
