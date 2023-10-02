package com.ts.taesan.domain.habit.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ts.taesan.domain.habit.dto.response.ClearHabitResponse;
import com.ts.taesan.domain.habit.dto.response.HabitCalendarResponse;
import com.ts.taesan.domain.habit.dto.response.HabitListResponse;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import static com.ts.taesan.domain.habit.entity.QHabit.habit;
import static com.ts.taesan.domain.habit.entity.QHabitLog.habitLog;
import static com.ts.taesan.domain.member.entity.QMember.member;
import static com.ts.taesan.domain.transaction.entity.QReceipt.receipt;
import static com.ts.taesan.domain.transaction.entity.QReceiptList.receiptList;
import static com.ts.taesan.domain.transaction.entity.QTransaction.transaction;

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

    public List<ClearHabitResponse> getSaveHabit(Long memberId) {

        LocalDateTime startOfDay = LocalDate.now().atStartOfDay();
        LocalDateTime endOfDay = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);

        System.out.println("시작일 : " + startOfDay + " 종료일 : " + endOfDay);

        Date today = new Date();

        // 현재 날짜의 시작 시간을 계산합니다. (시간, 분, 초, 밀리초를 0으로 설정)
        Calendar calendarStart = Calendar.getInstance();
        calendarStart.setTime(today);
        calendarStart.set(Calendar.HOUR_OF_DAY, 0);
        calendarStart.set(Calendar.MINUTE, 0);
        calendarStart.set(Calendar.SECOND, 0);
        calendarStart.set(Calendar.MILLISECOND, 0);
        Date startDay = calendarStart.getTime();

        // 현재 날짜의 끝 시간을 계산합니다. (시간, 분, 초, 밀리초를 23:59:59:999로 설정)
        Calendar calendarEnd = Calendar.getInstance();
        calendarEnd.setTime(today);
        calendarEnd.set(Calendar.HOUR_OF_DAY, 23);
        calendarEnd.set(Calendar.MINUTE, 59);
        calendarEnd.set(Calendar.SECOND, 59);
        calendarEnd.set(Calendar.MILLISECOND, 999);
        Date endDay = calendarEnd.getTime();

        List<ClearHabitResponse> saveHabit = queryFactory.select(Projections.constructor(ClearHabitResponse.class,
                        habit.id,
                        habit.habitName,
                        habit.targetMoney
                ))
                .from(habit)
                .where(habit.state.eq(0)
                        .and(habit.habitName.notIn(
                                JPAExpressions.select(
                                                receiptList.category).distinct()
                                        .from(receiptList)
                                        .join(receipt).on(receiptList.receipt.id.eq(receipt.id))
                                        .join(transaction).on(receipt.transaction.id.eq(transaction.id))
                                        .join(member).on(transaction.member.id.eq(member.id))
                                        .where(transaction.member.id.eq(memberId)
                                                .and(transaction.dateTime.between(startOfDay, endOfDay))
                                        ))
                        )
                        .and(habit.habitName.notIn(
                                JPAExpressions.select(
                                                habit.habitName).distinct()
                                        .from(habit)
                                        .join(habitLog).on(habitLog.habit.id.eq(habit.id))
                                        .join(member).on(member.id.eq(habit.member.id))
                                        .where(member.id.eq(memberId).and(habitLog.saveDay.between(startDay, endDay)))
                        ))
                )
                .fetch();
        return saveHabit;
    }

//    public Long getSavingDays(String habitTitle, Long memberId) {
//        Long count = queryFactory.select(receiptList).distinct()
//                .from(receiptList, habit)
//                .join(receipt).on(receiptList.receipt.id.eq(receipt.id))
//                .join(transaction).on(receipt.transaction.id.eq(transaction.id))
////                .join(habit).on(habit.title.eq(habitTitle).and(habit.member.id.eq(memberId)))
//                .where(receiptList.category.eq(habitTitle).and(transaction.dateTime.between(habit.createDate, Expressions.asDateTime(LocalDateTime.now()))))
//                .fetch().stream().count();
//        return count;
//    }
}
