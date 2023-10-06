package com.taesan.mydata.domain.bank.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountInfoRequest {

    @JsonProperty("org_code")
    private String orgCode;

    @JsonProperty("account_num")
    private String accountNum;

    @JsonProperty("seqno")
    private Integer seqno;

    @JsonProperty("search_timestamp")
    private Long searchTimestamp;

    @JsonProperty("next_page")
    private Long nextPage;

    @JsonProperty("limit")
    private Integer limit;

}
