package com.taesan.analyst.domain.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static lombok.AccessLevel.PUBLIC;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = PUBLIC)
public class Info {
    String id;
    String label;
    Long value;
}
