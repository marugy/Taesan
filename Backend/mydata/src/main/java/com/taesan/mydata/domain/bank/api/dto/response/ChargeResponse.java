package com.taesan.mydata.domain.bank.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ChargeResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rspMsg;

}
