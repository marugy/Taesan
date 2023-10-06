package com.taesan.mydata.domain.card.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class CardListResponse {

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

    @JsonProperty("card_cnt")
    private Integer cardCnt;

    @JsonProperty("card_list")
    private List<CardList> cardList;

    @Builder

    public CardListResponse(String regDate, Long nextPage, List<CardList> cardList) {
        this.regDate = regDate;
        this.nextPage = nextPage;
        this.cardCnt = cardList.size();
        this.cardList = cardList;
    }

}
