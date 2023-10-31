package com.taesan.mydata.domain.bank.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountList;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
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

    @Builder
    public AccountListResponse(String regDate, Long nextPage, List<AccountList> accountList) {
        this.rspCode = "200";
        this.rspMsg = "조회 성공";
        this.searchTimestamp = new Date().getTime();
        this.regDate = regDate;
        this.nextPage = nextPage;
        this.accountCnt = accountList.size();
        this.accountList = accountList;
    }

}
