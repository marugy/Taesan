package com.ts.taesan.global.openfeign.card.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
public class PayRequest {

        @JsonProperty("shopName")
        private String merchantRegno;

        @JsonProperty("pay_amt")
        private Integer payAmt;

    }