package com.ts.taesan.global.openfeign.bank.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

@Data
public class AccountDetail {

        @JsonProperty("currency_code")
        private String currencyCode;

        @JsonProperty("balance_amt")
        private double balanceAmt;

        @JsonProperty("withdrawable_amt")
        private double withdrawableAmt;

        @JsonProperty("offered_rate")
        private double offeredRate;

        @JsonProperty("last_paid_in_cnt")
        private String lastPaidInCnt;

        @Builder
        public AccountDetail(String currencyCode, Double balanceAmt, Double withdrawableAmt, Double offeredRate) {
                this.currencyCode = currencyCode;
                this.balanceAmt = balanceAmt;
                this.withdrawableAmt = withdrawableAmt;
                this.offeredRate = offeredRate;
        }
}