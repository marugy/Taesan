package com.ts.taesan.domain.transaction.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import static lombok.AccessLevel.PROTECTED;
@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
public class Transaction {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Long cardId;

    @NotNull
    private Long approvedId;

    @NotNull
    private String cardHistoryId;

    @NotNull
    private LocalDateTime dateTime;

    @NotNull
    private String shopName;

    @NotNull
    private Long approvedAmount;

    @NotNull
    private Long afterTransAmt;

    @NotNull
    private String category;

    @NotNull
    private Character cardType;

    @NotNull
    private String shopNumber;
}
