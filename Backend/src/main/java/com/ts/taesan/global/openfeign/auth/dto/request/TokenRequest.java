package com.ts.taesan.global.openfeign.auth.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@NoArgsConstructor
@Getter
@AllArgsConstructor
@Builder
public class TokenRequest {

    private String org_code;

    private String grant_type;

    private String code;

    private String client_id;

    private String client_secret;

    private String redirect_uri;

}
