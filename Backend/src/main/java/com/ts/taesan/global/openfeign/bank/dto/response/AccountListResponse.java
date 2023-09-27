package com.ts.taesan.global.openfeign.bank.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountList;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class AccountListResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rspMsg;

    @JsonProperty("search_timestamp")
    private Long searchTimestamp;

    @JsonProperty("reg_date")
    private String regDate;

    @JsonProperty("next_page")
    private Long nextPage;

    @JsonProperty("account_cnt")
    private Integer accountCnt;

    @JsonProperty("account_list")
    private List<AccountList> accountList;

}
