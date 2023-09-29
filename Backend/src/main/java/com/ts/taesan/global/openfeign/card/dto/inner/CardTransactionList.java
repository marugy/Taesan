package com.ts.taesan.global.openfeign.card.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Date;

public class CardTransactionList {

        @JsonProperty("approved_num")
        private String approvedNum;

        @JsonProperty("approved_dtime")
        private Date approvedDtime;

        @JsonProperty("status")
        private String status;

        @JsonProperty("pay_type")
        private String payType;

        @JsonProperty("trans_dtime")
        private Date transDtime;

        @JsonProperty("merchant_name")
        private String merchantName;

        @JsonProperty("merchant_regno")
        private String merchantRegno;

        @JsonProperty("approved_amt")
        private Integer approvedAmt;

        @JsonProperty("modified_amt")
        private Integer modifiedAmt;

        @JsonProperty("total_install_cnt")
        private Integer totalInstallCnt;

    }