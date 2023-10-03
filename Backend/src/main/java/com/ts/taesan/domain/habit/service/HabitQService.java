package com.ts.taesan.domain.habit.service;

import com.ts.taesan.domain.habit.dto.response.ClearHabitResponse;
import com.ts.taesan.domain.habit.dto.response.HabitCalendarResponse;
import com.ts.taesan.domain.habit.dto.response.HabitListResponse;
import com.ts.taesan.domain.habit.repository.HabitQRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

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

    public List<HabitCalendarResponse> getTotalCalendar(Long memberId, int year, int month) {
        List<HabitCalendarResponse> habitCalendarResponses = habitQRepository.getTotalCalendar(memberId, year, month);
        return habitCalendarResponses;
    }

    public List<HabitListResponse> getTotalCalendarDetail(Long memberId, int year, int month, int day) {
        List<HabitListResponse> totalCalendarDetails = habitQRepository.getTotalCalendarDetail(memberId, year, month, day);
        return totalCalendarDetails;
    }

    public HabitListResponse getHabitInfo(Long habitId) {
        HabitListResponse habitListResponse = habitQRepository.getHabitInfo(habitId);
        return habitListResponse;
    }

    public List<HabitCalendarResponse> getHabitCalendar(Long habitId, int year, int month) {
        List<HabitCalendarResponse> habitCalendar = habitQRepository.getHabitCalendar(habitId, year, month);
        return habitCalendar;
    }

    public List<ClearHabitResponse> getClearHabits(Long memberId) {
        List<ClearHabitResponse> clearHabitResponses = habitQRepository.getSaveHabit(memberId);
        return clearHabitResponses;
    }
}
