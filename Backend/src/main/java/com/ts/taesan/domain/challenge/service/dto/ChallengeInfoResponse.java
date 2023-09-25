package com.ts.taesan.domain.challenge.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeInfoResponse {
    private String title;

    private Long price;

    private Date period;
}
