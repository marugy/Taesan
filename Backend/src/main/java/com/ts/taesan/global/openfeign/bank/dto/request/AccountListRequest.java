package com.ts.taesan.global.openfeign.bank.dto.request;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountListRequest {

    String org_code;

    long search_timestamp;

    long next_page;

    int limit;

}
