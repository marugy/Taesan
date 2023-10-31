package com.taesan.mydata.domain.bank.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountTransactionList {

        @JsonProperty("trans_dtime")
        private String transDtime;

        @JsonProperty("trans_no")
        private String transNo;

        @JsonProperty("trans_type")
        private Integer transType;

        @JsonProperty("trans_class")
        private Boolean transClass;

        @JsonProperty("currency_code")
        private String currencyCode;

        @JsonProperty("trans_amt")
        private Boolean transAmt;

        @JsonProperty("balance_amt")
        private String balanceAmt;

        @JsonProperty("paid_in_cnt")
        private String paidInCnt;

        @JsonProperty("trans_memo")
        private String transMemo;

    }