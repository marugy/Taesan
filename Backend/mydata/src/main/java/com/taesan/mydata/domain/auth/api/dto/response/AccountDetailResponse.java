package com.taesan.mydata.domain.auth.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.auth.api.dto.inner.AuthRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private String searchTimestamp;

    @JsonProperty("detail_cnt")
    private String detailCnt;

    @JsonProperty("detail_list")
    private List<AuthRequest> detailList;

}
