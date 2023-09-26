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
public class ChallengeRecruitDetailResponse {

    private String title;

    private Long price;

    private int period;

    private String uuid;

    private List<String> participantNames;

    private boolean creator;

    public ChallengeRecruitDetailResponse(String name, ChallengeInfoResponse challengeInfoResponse, List<String> participantNames) {
        this.title = challengeInfoResponse.getTitle();
        this.price = challengeInfoResponse.getPrice();
        this.period = challengeInfoResponse.getPeriod();
        this.uuid = challengeInfoResponse.getUuid();
        this.participantNames = participantNames;
        if (challengeInfoResponse.getCreator().equals(name)) {
            this.creator = true;
        } else {
            this.creator = false;
        }
    }
}
