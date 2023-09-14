package com.taesan.habit.domain.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DayInfo {

    @JsonProperty("year")
    String year;

    @JsonProperty("month")
    String month;

    @JsonProperty("day")
    String day;

    @JsonProperty("money")
    Integer money;

}
