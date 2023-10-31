package com.taesan.mydata.domain.auth.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Auth {

    @Id
    private Long id;

    @ColumnDefault("true")
    private Boolean bankList;

    @ColumnDefault("true")
    private Boolean bankDeposit;

    @ColumnDefault("true")
    private Boolean cardList;

    @ColumnDefault("true")
    private Boolean cardCard;

}
