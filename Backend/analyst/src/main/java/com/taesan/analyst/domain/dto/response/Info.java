package com.taesan.analyst.domain.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import static lombok.AccessLevel.PUBLIC;

@Getter
@NoArgsConstructor(access = PUBLIC)
public class Info {
    String id;
    String label;
    Long value;
}
