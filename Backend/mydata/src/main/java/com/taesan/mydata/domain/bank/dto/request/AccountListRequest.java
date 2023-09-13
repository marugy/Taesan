package com.taesan.mydata.domain.bank.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class AccountListRequest {

    @JsonProperty("org_code")
    @NotBlank
    private String orgCode;

    @JsonProperty("search_timestamp")
    private String searchTimestamp;

    @JsonProperty("next_page")
    private String nextPage;

    @JsonProperty("limit")
    @NotBlank
    private String limit;

}
