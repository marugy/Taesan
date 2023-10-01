package com.ts.taesan.domain.habit.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ts.taesan.domain.habit.dto.response.HabitListResponse;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.ts.taesan.domain.habit.entity.QHabit.habit;

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
}
