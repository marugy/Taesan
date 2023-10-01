package com.ts.taesan.domain.habit.entity;

import com.ts.taesan.global.entity.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SuperBuilder
@DynamicInsert
@ToString
public class HabitLog extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "habit_id")
    private Habit habit;

    private Date saveDay;

    private Long saveMoney;

}
