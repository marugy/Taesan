package com.taesan.mydata.domain.bank.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
public class AccountList {

        @JsonProperty("account_num")
        private String accountNum;

        @JsonProperty("is_consent")
        private Boolean isConsent;

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

        @Builder
        public AccountList(String accountNum, Boolean isConsent, String prodName, String accountType, String accountStatus) {
                this.accountNum = accountNum;
                this.isConsent = isConsent;
                this.prodName = prodName;
                this.accountType = accountType;
                this.accountStatus = accountStatus;
        }
}