package com.taesan.mydata.domain.bank.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountListRequest {

    @NotBlank
    String org_code;

    @NotBlank
    @Positive
    String search_timestamp;

    String next_page;

    @NotBlank
    @Max(500)
    @Positive
    String limit;

}
