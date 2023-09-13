package com.taesan.mydata.domain.bank.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class AccountListResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rsp_msg;

    @JsonProperty("search_timestamp")
    private String search_timestamp;

    @JsonProperty("reg_date")
    private String reg_date;

    @JsonProperty("next_page")
    private String next_page;

    @JsonProperty("account_cnt")
    private String account_cnt;

    @JsonProperty("account_list")
    private AccountListInfoResponse account_list;

}
