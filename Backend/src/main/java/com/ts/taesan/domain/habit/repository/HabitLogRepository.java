package com.ts.taesan.domain.habit.repository;

import com.ts.taesan.domain.habit.entity.HabitLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HabitLogRepository extends JpaRepository<HabitLog, Long> {
}
