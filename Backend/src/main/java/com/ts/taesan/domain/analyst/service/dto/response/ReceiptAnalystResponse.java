package com.ts.taesan.domain.analyst.service.dto.response;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class ReceiptAnalystResponse {

    String year;
    String month;
    List<Info> infos;

}
