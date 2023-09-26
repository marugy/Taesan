package com.ts.taesan.domain.challenge.dto.response;

import com.ts.taesan.domain.challenge.service.dto.ChallengeInfoResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeProgressDetailResponse {

    private String title;

    private Long price;

    private Date endDate;

    private List<ParticipantResponse> participants;

    private boolean creator;

    private Long spare;

    public ChallengeProgressDetailResponse(String name, Long spare, ChallengeInfoResponse challengeInfoResponse, List<ParticipantResponse> participants) {
        this.title = challengeInfoResponse.getTitle();
        this.price = challengeInfoResponse.getPrice();
        this.endDate = challengeInfoResponse.getEndDate();
        this.participants = participants;
        this.spare = spare;
        if (challengeInfoResponse.getCreator().equals(name)) {
            this.creator = true;
        } else {
            this.creator = false;
        }
    }
}
