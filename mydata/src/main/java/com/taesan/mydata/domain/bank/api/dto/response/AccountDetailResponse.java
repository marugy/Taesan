package com.taesan.mydata.domain.bank.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountDetail;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class AccountDetailResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rspMsg;

    @JsonProperty("search_timestamp")
    private long searchTimestamp;

    @JsonProperty("detail_cnt")
    private int detailCnt;

    @JsonProperty("detail_list")
    private List<AccountDetail> detailList;

    @Builder
    public AccountDetailResponse(List<AccountDetail> detailList) {
        this.rspCode = "200";
        this.rspMsg = "조회 성공";
        this.searchTimestamp = new Date().getTime();
        this.detailCnt = detailList.size();
        this.detailList = detailList;
    }
}
