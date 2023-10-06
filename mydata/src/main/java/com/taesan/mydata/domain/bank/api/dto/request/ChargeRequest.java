package com.taesan.mydata.domain.bank.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChargeRequest {

    @JsonProperty("sender_acc_num")
    private String senderAccNum;

    @JsonProperty("trans_amt")
    private Long transAmt;

}
