package com.taesan.ifbuy.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IfbuyRegisterResponse {

    @JsonProperty("price")
    Long price;

    @JsonProperty("saved_money")
    Long savedMoney;

}
