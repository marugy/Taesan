package com.ts.taesan.domain.asset.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class TaesanPayRequest {

        private String shopName;

        @JsonProperty("pay_amt")
        private Long payAmt;

    }