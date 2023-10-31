package com.ts.taesan.domain.habit.service;

import com.ts.taesan.domain.asset.service.AssetService;
import com.ts.taesan.domain.habit.dto.SaveHabitRequest;
import com.ts.taesan.domain.habit.entity.Habit;
import com.ts.taesan.domain.habit.entity.HabitLog;
import com.ts.taesan.domain.habit.repository.HabitLogRepository;
import com.ts.taesan.domain.habit.repository.HabitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class HabitLogService {

    private final HabitLogRepository habitLogRepository;
    private final HabitRepository habitRepository;
    private final AssetService assetService;

    public void saveHabits(Long memberId, SaveHabitRequest saveHabitRequest) {
        List<Long> habitIds = saveHabitRequest.getHabitIds();
        for (int i = 0; i < habitIds.size(); i++) {
            Habit habit = habitRepository.findById(habitIds.get(i)).orElseThrow();
            habit.savingMoney(new Long(habit.getTargetMoney()));
            assetService.saveMoney(memberId, new Long(habit.getTargetMoney()), 2);
            HabitLog habitLog = HabitLog.builder()
                    .habit(habit)
                    .saveDay(java.sql.Timestamp.valueOf(LocalDateTime.now()))
                    .saveMoney(new Long(habit.getTargetMoney()))
                    .build();
            habitLogRepository.save(habitLog);
        }
    }
}
