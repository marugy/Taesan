package com.taesan.mydata.domain.bank.api.dto.inner;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Getter
@NoArgsConstructor
public class TransactionList {

    @JsonProperty("trans_dtime")
    private Date transDtime;

    @JsonProperty("trans_no")
    private String trans_no;

    @JsonProperty("trans_type")
    private String trans_type;

    @JsonProperty("trans_class")
    private String trans_class;

    @JsonProperty("currency_code")
    private String currency_code;

    @JsonProperty("trans_amt")
    private Double trans_amt;

    @JsonProperty("balance_amt")
    private Double balance_amt;

    @JsonProperty("paid_in_cnt")
    private Integer paid_in_cnt;

    @JsonProperty("trans_memo")
    private String trans_memo;

}