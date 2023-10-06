package com.ts.taesan.domain.asset.api.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TikkleCreateRequest {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date endDate;

}