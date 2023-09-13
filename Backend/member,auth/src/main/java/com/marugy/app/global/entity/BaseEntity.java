package com.marugy.app.global.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@SuperBuilder
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED) // proxy 관련 / private 설정 시 error 발생
@MappedSuperclass // 테이블과 매핑 x , jpa에서는 @Entity 클래스는 @Entity  @MappedSuperclass로 지정한 클래스만 상속 가능
@EntityListeners(AuditingEntityListener.class) // 시간에 대해서 자동으로 값을 넣어주는 기능
public class BaseEntity {
    @CreatedDate
//    @Column(updatable = false) //update 시점에칼럼 수정을 막는다
    private LocalDateTime createDate;//createdDate;
    @LastModifiedDate
    private LocalDateTime modifyDate;//modifiedDate;
}
