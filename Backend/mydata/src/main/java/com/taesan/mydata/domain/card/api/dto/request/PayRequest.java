package com.taesan.mydata.domain.card.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayRequest {

        @JsonProperty("merchant_regno")
        private String merchantRegno;

        @JsonProperty("pay_amt")
        private Integer payAmt;

        @JsonProperty("total_install_cnt")
        private Integer totalInstallCnt;

    }