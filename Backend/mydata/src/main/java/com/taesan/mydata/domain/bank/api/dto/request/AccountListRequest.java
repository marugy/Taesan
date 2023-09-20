package com.taesan.mydata.domain.bank.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountListRequest {

    @JsonProperty("org_code")
//    @NotBlank
    private String orgCode;

    @JsonProperty("search_timestamp")
    private String searchTimestamp;

    @JsonProperty("next_page")
    private String nextPage;

    @JsonProperty("limit")
//    @NotBlank
    private String limit;

}
