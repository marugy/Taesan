package com.taesan.ifbuy.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IfbuyPossibilityResponse {

    @JsonProperty("order")
    Boolean order;

}
