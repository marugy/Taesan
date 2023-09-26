package com.ts.taesan.domain.challenge.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeInfoResponse {
    private String title;

    private int period;

    private Long price;

    private Date endDate;

    private String uuid;

    private String creator;
}
