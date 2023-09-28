package com.ts.taesan.domain.ifbuy.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IfbuyPossibilityResponse {

    @JsonProperty("order")
    Boolean order;

}
