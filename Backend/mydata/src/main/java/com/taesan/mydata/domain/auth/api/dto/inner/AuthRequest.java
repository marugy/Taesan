package com.taesan.mydata.domain.auth.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthRequest {

        @JsonProperty("currency_code")
        private String currencyCode;

        @JsonProperty("balance_amt")
        private String balanceAmt;

        @JsonProperty("withdrawable_amt")
        private String withdrawableAmt;

        @JsonProperty("offered_rate")
        private String offeredRate;

        @JsonProperty("last_paid_in_cnt")
        private String lastPaidInCnt;

    }