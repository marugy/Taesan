package com.taesan.mydata.domain.bank.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountInfo {

        @JsonProperty("currency_code")
        private String currencyCode;

        @JsonProperty("saving_method")
        private String savingMethod;

        @JsonProperty("issue_date")
        private String issueDate;

        @JsonProperty("exp_date")
        private String expDate;

        @JsonProperty("commit_amt")
        private Double commitAmt;

        @JsonProperty("monthly_paid_in_amt")
        private Double monthlyPaidInAmt;

    }