package com.ts.taesan.domain.asset.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class TaesanPayRequest {

        @JsonProperty("shop_name")
        private String shopName;

        @JsonProperty("pay_amt")
        private Integer payAmt;

    }