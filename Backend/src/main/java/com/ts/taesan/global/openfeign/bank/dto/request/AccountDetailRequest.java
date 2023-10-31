package com.ts.taesan.global.openfeign.bank.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountDetailRequest {

    private String org_code;

    private String account_num;

    private Integer seqno;

    private Long search_timestamp;

}
