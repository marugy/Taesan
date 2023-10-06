package com.ts.taesan.domain.challenge.service.dto;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExpiredChallengeInfoResponse {
    private String title;
    private Date startDate;
    private Date endDate;
    private Long price;
    private Long spare;

    public ExpiredChallengeInfoResponse(String title, Date startDate, Date endDate, Long price) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
    }
}
