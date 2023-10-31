package com.ts.taesan.domain.habit.repository;

import com.ts.taesan.domain.habit.entity.Habit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HabitRepository extends JpaRepository<Habit, Long> {
}
