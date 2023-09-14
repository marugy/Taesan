package com.taesan.ifbuy.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IfbuyListResponse {

    @JsonProperty("most_buy")
    String mostBuy;

    @JsonProperty("most_buy_price")
    Long mostBuyPrice;

    @JsonProperty("bank")
    String bank;

    @JsonProperty("balance")
    Long balance;

    @JsonProperty("tikkle")
    Long tikkle;

    @JsonProperty("item_list")
    List<IfbuyItem> itemList;

}
