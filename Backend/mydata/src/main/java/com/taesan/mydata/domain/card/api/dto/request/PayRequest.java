package com.taesan.mydata.domain.card.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
public class PayRequest {

        @JsonProperty("shop_name")
        private String shopName;

        @JsonProperty("pay_amt")
        private Long payAmt;

}