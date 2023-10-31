package com.taesan.mydata.domain.card.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import com.taesan.mydata.domain.card.api.dto.inner.CardTransactionList;
import lombok.Builder;
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

    @Builder
    public CardTransactionListResponse(Long nextPage, List<CardTransactionList> approvedList) {
        this.rspCode = "200";
        this.rspMsg = "성공";
        this.nextPage = nextPage;
        this.approvedCnt = approvedList.size();
        this.approvedList = approvedList;
    }
}
