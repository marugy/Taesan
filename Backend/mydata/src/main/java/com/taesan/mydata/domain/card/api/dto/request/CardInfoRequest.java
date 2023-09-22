package com.taesan.mydata.domain.card.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CardInfoRequest {

    private String org_code;

    private Long search_timestamp;

    private Long next_page;

    private Integer limit;

}
