package com.taesan.analyst.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class PlaceAnalystResponse {

    @JsonProperty("location_category")
    String locationCategory;

}
