package com.ts.taesan.domain.transaction.req;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

//@Data
@Getter
@AllArgsConstructor
public class Specific {
    private String place_name;
    private String category_group_code;
}
