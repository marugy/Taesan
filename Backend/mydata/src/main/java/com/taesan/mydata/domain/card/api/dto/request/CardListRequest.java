package com.taesan.mydata.domain.card.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CardListRequest {

    @JsonProperty("org_code")
    private String orgCode;

    @JsonProperty("search_timestamp")
    private Long searchTimestamp;

    @JsonProperty("next_page")
    private Long nextPage;

    @JsonProperty("limit")
    private Integer limit;

}
