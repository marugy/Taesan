package com.taesan.mydata.domain.card.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.taesan.mydata.domain.card.api.dto.inner.CardTransactionList;
import lombok.*;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Builder
public class PayResponse {

    @JsonProperty("rsp_code")
    private String rspCode;

    @JsonProperty("rsp_msg")
    private String rspMsg;

    @JsonProperty("approved_num")
    private String approvedNum;

    @JsonProperty("approved_dtime")
    private Date approvedDtime;

}
