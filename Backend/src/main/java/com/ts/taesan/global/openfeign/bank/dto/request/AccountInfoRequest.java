package com.ts.taesan.global.openfeign.bank.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountInfoRequest {

    private String org_code;

    private String account_num;

    private Integer seqno;

    private Long search_timestamp;

    private Long next_page;

    private Integer limit;

}
