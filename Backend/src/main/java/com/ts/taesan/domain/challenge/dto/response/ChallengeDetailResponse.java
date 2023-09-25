package com.ts.taesan.domain.challenge.dto.response;

import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeDetailResponse {

    private String title;

    private Long price;

    private Date period;

    private String uuid;

    private List<ParticipantResponse> participants;

    public ChallengeDetailResponse(ChallengeInfoResponse challengeInfoResponse, List<ParticipantResponse> participants) {
        this.title = challengeInfoResponse.getTitle();
        this.price = challengeInfoResponse.getPrice();
        this.period = challengeInfoResponse.getPeriod();
        this.uuid = challengeInfoResponse.getUuid();
        this.participants = participants;
    }
}
