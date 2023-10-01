package com.ts.taesan.domain.asset.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ts.taesan.domain.asset.api.dto.response.CardHistoryListResponse;
import com.ts.taesan.global.openfeign.card.dto.inner.CardTransactionList;
import com.ts.taesan.global.openfeign.card.dto.response.CardTransactionListResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
public class CardHistoryList {

        @JsonProperty("history_id")
        private Long id;

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
        private Long approvedAmt;

        public CardHistoryList(CardTransactionList transactionList) {
                this.id = transactionList.getId();
                this.approvedAmt = transactionList.getApprovedAmt();
                this.approvedDtime = transactionList.getApprovedDtime();
                this.merchantRegno = transactionList.getMerchantRegno();
                this.payType = transactionList.getPayType();
                this.merchantName = transactionList.getMerchantName();
                this.status = transactionList.getStatus();
                this.approvedNum = transactionList.getApprovedNum();
                this.transDtime = transactionList.getTransDtime();
        }

    }