package com.taesan.mydata.domain.bank.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class AccountInfoResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rspMsg;

    @JsonProperty("search_timestamp")
    private String searchTimestamp;

    @JsonProperty("basic_cnt")
    private String basicCnt;

    @JsonProperty("next_page")
    private String nextPage;

    @JsonProperty("account_cnt")
    private String accountCnt;

    @JsonProperty("basic_list")
    private List<AccountInfo> basicList;

}
