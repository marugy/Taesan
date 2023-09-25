package com.ts.taesan.domain.challenge.dto.response;

import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeDetailResponse {

    private String title;

    private Long price;

    private Date period;

    private List<ParticipantResponse> participants;

    public ChallengeDetailResponse(ChallengeInfoResponse challengeInfoResponse, List<ParticipantResponse> participants) {
        this.title = challengeInfoResponse.getTitle();
        this.price = challengeInfoResponse.getPrice();
        this.period = challengeInfoResponse.getPeriod();
        this.participants = participants;
    }
}
