package com.taesan.mydata.domain.bank.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
public class AccountDetail {

        // 얘는 임시로 제공
        @JsonProperty("account_name")
        private String accountName;

        @JsonProperty("currency_code")
        private String currencyCode;

        @JsonProperty("balance_amt")
        private Double balanceAmt;

        @JsonProperty("withdrawable_amt")
        private Double withdrawableAmt;

        @JsonProperty("offered_rate")
        private Double offeredRate;

        @JsonProperty("last_paid_in_cnt")
        private String lastPaidInCnt;

        @Builder
        public AccountDetail(String accountName, String currencyCode, Double balanceAmt, Double withdrawableAmt, Double offeredRate) {
                this.accountName = accountName;
                this.currencyCode = currencyCode;
                this.balanceAmt = balanceAmt;
                this.withdrawableAmt = withdrawableAmt;
                this.offeredRate = offeredRate;
        }
}