package com.ts.taesan.domain.habit.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ts.taesan.domain.habit.dto.response.HabitCalendarResponse;
import com.ts.taesan.domain.habit.dto.response.HabitListResponse;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.ts.taesan.domain.habit.entity.QHabit.habit;
import static com.ts.taesan.domain.habit.entity.QHabitLog.habitLog;

@Repository

public class HabitQRepository {
    private final JPAQueryFactory queryFactory;

    public HabitQRepository(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    public List<HabitListResponse> getProgressHabits(Long memberId) {
        List<HabitListResponse> progressHabits = queryFactory.select(Projections.constructor(HabitListResponse.class,
                        habit.id,
                        habit.title,
                        habit.habitName,
                        habit.createDate,
                        habit.saving
                ))
                .from(habit)
                .where(habit.member.id.eq(memberId).and(habit.state.eq(0)))
                .fetch();

        return progressHabits;
    }

    public List<HabitListResponse> getCompleteHabits(Long memberId) {
        List<HabitListResponse> completeHabits = queryFactory.select(Projections.constructor(HabitListResponse.class,
                        habit.id,
                        habit.title,
                        habit.habitName,
                        habit.createDate,
                        habit.saving
                ))
                .from(habit)
                .where(habit.member.id.eq(memberId).and(habit.state.eq(1)))
                .fetch();
        return completeHabits;
    }

    public List<HabitCalendarResponse> getTotalCalendar(Long memberId, int year, int month) {
        List<HabitCalendarResponse> habitCalendarResponses = queryFactory.select(Projections.constructor(HabitCalendarResponse.class,
                        habitLog.saveDay.year(),
                        habitLog.saveDay.month(),
                        habitLog.saveDay.dayOfMonth(),
                        habitLog.saveMoney.sum()
                ))
                .from(habitLog)
                .join(habit).on(habit.id.eq(habitLog.habit.id))
                .where(habit.member.id.eq(memberId).and(habitLog.saveDay.year().eq(year).and(habitLog.saveDay.month().eq(month))))
                .groupBy(habitLog.saveDay)
                .fetch();
        return habitCalendarResponses;
    }

    public List<HabitListResponse> getTotalCalendarDetail(Long memberId, int year, int month, int day) {
        List<HabitListResponse> totalCalendarDetails = queryFactory.select(Projections.constructor(HabitListResponse.class,
                        habit.id,
                        habit.title,
                        habit.habitName,
                        habitLog.createDate,
                        habitLog.saveMoney
                ))
                .from(habitLog)
                .join(habit).on(habit.id.eq(habitLog.id))
                .where(habit.member.id.eq(memberId).and(habitLog.saveDay.year().eq(year).and(habitLog.saveDay.month().eq(month).and(habitLog.saveDay.dayOfMonth().eq(day)))))
                .fetch();
        return totalCalendarDetails;
    }

    public HabitListResponse getHabitInfo(Long habitId) {
        HabitListResponse habitListResponse = queryFactory.select(Projections.constructor(HabitListResponse.class,
                        habit.id,
                        habit.title,
                        habit.habitName,
                        habit.createDate,
                        habit.saving,
                        habit.endDate
                ))
                .from(habit)
                .where(habit.id.eq(habitId))
                .fetchFirst();
        return habitListResponse;
    }

    public List<HabitCalendarResponse> getHabitCalendar(Long habitId, int year, int month) {
        List<HabitCalendarResponse> habitCalendar = queryFactory.select(Projections.constructor(HabitCalendarResponse.class,
                        habitLog.saveDay.year(),
                        habitLog.saveDay.month(),
                        habitLog.saveDay.dayOfMonth(),
                        habitLog.saveMoney.sum()
                ))
                .from(habitLog)
                .join(habit).on(habit.id.eq(habitLog.habit.id))
                .where(habitLog.habit.id.eq(habitId).and(habitLog.saveDay.year().eq(year).and(habitLog.saveDay.month().eq(month))))
                .groupBy(habitLog.saveDay)
                .fetch();
        return habitCalendar;
    }
}
