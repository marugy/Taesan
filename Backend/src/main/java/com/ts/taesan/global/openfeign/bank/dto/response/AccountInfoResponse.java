package com.ts.taesan.global.openfeign.bank.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
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
    private long searchTimestamp;

    @JsonProperty("basic_cnt")
    private int basicCnt;

    @JsonProperty("basic_list")
    private List<AccountInfo> basicList;

    @Builder
    public AccountInfoResponse(List<AccountInfo> basicList) {
        this.rspCode = "200";
        this.rspMsg = "조회 성공";
        this.searchTimestamp = new Date().getTime();
        this.basicCnt = basicList.size();
        this.basicList = basicList;
    }

}
