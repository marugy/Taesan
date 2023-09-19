package com.taesan.analyst.domain.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class ReceiptAnalystResponse {

    String year;
    String month;
    List<Info> infos;

}
