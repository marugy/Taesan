package com.ts.taesan.domain.analyst.service.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
public class PlaceAnalystResponse {

    String year;
    String month;
    List<Info> infos;

}
