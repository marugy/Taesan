package com.ts.taesan.global.openfeign.card.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts.taesan.global.openfeign.card.dto.inner.CardTransactionList;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class CardTransactionListResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rspMsg;

    @JsonProperty("next_page")
    private Long nextPage;

    @JsonProperty("approved_cnt")
    private Integer approvedCnt;

    @JsonProperty("approved_list")
    private List<CardTransactionList> approvedList;

}
