package com.taesan.mydata.domain.card.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.java.Log;

import java.sql.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class CardInfoResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rspMsg;

    @JsonProperty("search_timestamp")
    private Long searchTimestamp;

    @JsonProperty("is_trans_payable")
    private Boolean isTransPayable;

    @JsonProperty("is_cash_card")
    private Boolean isCashCard;

    @JsonProperty("linked_bank_code")
    private String linkedBankCode;

    @JsonProperty("card_brand")
    private String cardBrand;

    @JsonProperty("annual_fee")
    private Long annualFee;

    @JsonProperty("issue_date")
    private Date issueDate;

}
