package com.taesan.mydata.domain.bank.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
public class AccountInfo {

        @JsonProperty("currency_code")
        private String currencyCode;

        @JsonProperty("saving_method")
        private String savingMethod;

        @JsonProperty("holder_name")
        private String holderName;

        @JsonProperty("issue_date")
        private Date issueDate;

        @JsonProperty("exp_date")
        private Date expDate;

        @JsonProperty("commit_amt")
        private Double commitAmt;

        @JsonProperty("monthly_paid_in_amt")
        private Double monthlyPaidInAmt;

        @Builder
        public AccountInfo(String savingMethod, String holderName, Date issueDate) {
                this.savingMethod = savingMethod;
                this.holderName = holderName;
                this.issueDate = issueDate;
        }
}