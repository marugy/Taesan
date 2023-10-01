package com.ts.taesan.domain.habit.service;

import com.ts.taesan.domain.habit.dto.response.HabitListResponse;
import com.ts.taesan.domain.habit.repository.HabitQRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class HabitQService {
    private final HabitQRepository habitQRepository;

    public List<HabitListResponse> getProgressHabits(Long memberId) {
        List<HabitListResponse> progressHabits = habitQRepository.getProgressHabits(memberId);
        return progressHabits;
    }

    public List<HabitListResponse> getCompleteHabits(Long memberId) {
        List<HabitListResponse> completeHabits = habitQRepository.getCompleteHabits(memberId);
        return completeHabits;
    }
}
