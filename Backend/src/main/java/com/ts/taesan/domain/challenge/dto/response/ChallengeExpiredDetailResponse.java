package com.ts.taesan.domain.challenge.dto.response;

import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import com.ts.taesan.domain.challenge.service.dto.ExpiredChallengeInfoResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeExpiredDetailResponse {

    private String title;

    private Long price;
    private Date startDate;
    private Date endDate;

    private List<ParticipantResponse> participants;

    private Long spare;

    public ChallengeExpiredDetailResponse(Long spare, ExpiredChallengeInfoResponse expiredChallengeInfoResponse, List<ParticipantResponse> participants) {
        this.title = expiredChallengeInfoResponse.getTitle();
        this.price = expiredChallengeInfoResponse.getPrice();
        this.startDate = expiredChallengeInfoResponse.getStartDate();
        this.endDate = expiredChallengeInfoResponse.getEndDate();
        this.participants = participants;
        this.spare = spare;
    }
}
