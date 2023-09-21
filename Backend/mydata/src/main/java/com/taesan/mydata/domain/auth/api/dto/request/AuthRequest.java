package com.taesan.mydata.domain.auth.api.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class AuthRequest {

    @JsonProperty("org_code")
    private String orgCode;

    @JsonProperty("response_type")
    private String responseType;

    @JsonProperty("client_id")
    private String clientId;

    @JsonProperty("redirect_uri")
    private String redirectUri;

    @JsonProperty("app_scheme")
    private String appScheme;

    @JsonProperty("state")
    private String state;

}
