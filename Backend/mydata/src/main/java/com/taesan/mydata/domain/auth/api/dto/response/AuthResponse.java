package com.taesan.mydata.domain.auth.api.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class AuthResponse {

    @JsonProperty("code")
    private String code;

    @JsonProperty("state")
    private String state;

    @JsonProperty("api_tran_id")
    private String api_tran_id;

}
