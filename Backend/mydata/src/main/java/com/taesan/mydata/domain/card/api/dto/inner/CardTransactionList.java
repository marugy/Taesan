package com.taesan.mydata.domain.card.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class CardTransactionList {

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

        @JsonProperty("modified_amt")
        private Long modifiedAmt;

        @JsonProperty("total_install_cnt")
        private Integer totalInstallCnt;

    }