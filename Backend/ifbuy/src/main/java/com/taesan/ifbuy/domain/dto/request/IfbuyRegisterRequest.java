package com.taesan.ifbuy.domain.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class IfbuyRegisterRequest {

    @JsonProperty("name")
    String name;

    @JsonProperty("price")
    String price;

}
