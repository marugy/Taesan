package com.ts.taesan.global.openfeign.card.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts.taesan.global.openfeign.card.dto.inner.CardList;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
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

}
