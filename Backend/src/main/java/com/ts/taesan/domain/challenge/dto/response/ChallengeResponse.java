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
    private Long spare;

//    public ChallengeResponse(Long id, String title, Long price, Date startDate, Date endDate, boolean isExchange) {
//        this.id = id;
//        this.title = title;
//        this.price = price;
//        this.startDate = startDate;
//        this.endDate = endDate;
//        this.isExchange = isExchange;
//    }
}
