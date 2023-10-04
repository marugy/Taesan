//package com.taesan.mydata.global.openfeign.transaction.dto.request;
//
//import com.fasterxml.jackson.annotation.JsonProperty;
//import com.taesan.mydata.domain.card.entity.CardHistory;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.Date;
//
//@Data
//@AllArgsConstructor
//public class CardHistoryList {
//
//        @JsonProperty("history_id")
//        private Long id;
//
//        @JsonProperty("approved_num")
//        private String approvedNum;
//
//        @JsonProperty("approved_dtime")
//        private Date approvedDtime;
//
//        @JsonProperty("status")
//        private String status;
//
//        @JsonProperty("pay_type")
//        private String payType;
//
//        @JsonProperty("trans_dtime")
//        private Date transDtime;
//
//        @JsonProperty("merchant_name")
//        private String merchantName;
//
//        @JsonProperty("merchant_regno")
//        private String merchantRegno;
//
//        @JsonProperty("approved_amt")
//        private Long approvedAmt;
//
//        public CardHistoryList(CardHistory cardHistory) {
//                this.id = cardHistory.getId();
//                this.approvedAmt = cardHistory.getApprovedAmt();
//                this.approvedDtime = cardHistory.getApprovedDtime();
//                this.merchantRegno = cardHistory.getMerchantRegno();
//                this.payType = cardHistory.getPayType();
//                this.merchantName = cardHistory.getMerchantName();
//                this.status = cardHistory.getStatus();
//                this.approvedNum = cardHistory.getApprovedNum();
//                this.transDtime = cardHistory.getTransDtime();
//        }
//
//    }