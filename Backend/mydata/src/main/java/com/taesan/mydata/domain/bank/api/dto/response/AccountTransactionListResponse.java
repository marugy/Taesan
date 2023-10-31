package com.taesan.mydata.domain.bank.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountTransactionList;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class AccountTransactionListResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rspMsg;

    @JsonProperty("next_page")
    private Long nextPage;

    @JsonProperty("trans_cnt")
    private Long transCnt;

    @JsonProperty("trans_list")
    private List<AccountTransactionList> transList;

}
