package com.taesan.mydata.domain.bank.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountList {

        @JsonProperty("account_num")
        private String accountNum;

        @JsonProperty("is_consent")
        private String isConsent;

        @JsonProperty("seqno")
        private Integer seqNo;

        @JsonProperty("is_foreign_deposit")
        private Boolean isForeignDeposit;

        @JsonProperty("prod_name")
        private String prodName;

        @JsonProperty("is_minus")
        private Boolean isMinus;

        @JsonProperty("account_type")
        private String accountType;

        @JsonProperty("account_status")
        private String accountStatus;

    }