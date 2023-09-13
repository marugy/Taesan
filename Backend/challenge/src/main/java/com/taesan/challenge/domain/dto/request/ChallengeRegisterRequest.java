package com.taesan.challenge.domain.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChallengeRegisterRequest {

    @JsonProperty("title")
    String title;

    @JsonProperty("period")
    String period;

    @JsonProperty("price")
    String price;

}
