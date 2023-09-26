package com.ts.taesan.domain.challenge.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class ChallengeResponse {
    private Long id;
    private String title;
    private Long price;
    private Date startDate;
    private Date endDate;
    private boolean isExchange;
}
