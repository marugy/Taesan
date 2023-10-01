package com.ts.taesan.domain.habit.entity;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.global.entity.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import net.bytebuddy.implementation.bind.annotation.Super;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SuperBuilder
@DynamicInsert
@ToString
public class Habit extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    private String title;

    private String habitName;

    @ColumnDefault("0")
    private int state; //상태 0이면 진행중 1이면 종료

    @ColumnDefault("0")
    private Long saving;

    @OneToMany
    private List<HabitLog> habitLogList;

    public void endHabit() {
        this.state = 1;
    }
}
