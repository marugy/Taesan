package com.taesan.analyst.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class PlaceReceiptResponse {

    @JsonProperty("name")
    String name;

    @JsonProperty("product_category")
    String productCategory;

}
