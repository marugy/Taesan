package com.taesan.mydata.domain.bank.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransferRequest {

    @JsonProperty("receiver_acc_num")
    private String receiverAccNum;

    @JsonProperty("sender_acc_num")
    private String senderAccNum;

    @JsonProperty("trans_amt")
    private Integer transAmt;

    @JsonProperty("account_password")
    private String accountPassword;

}
