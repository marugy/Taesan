package com.taesan.mydata.domain.bank.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountListRequest {

    @NotBlank
    String org_code;

    @NotNull
    @Positive
    long search_timestamp;

    long user_ci;

    long next_page;

    @NotNull
    @Max(500)
    @Positive
    int limit;

}
