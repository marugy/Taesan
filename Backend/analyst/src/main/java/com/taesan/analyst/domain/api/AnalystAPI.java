package com.taesan.analyst.domain.api;

import com.taesan.analyst.domain.dto.request.PlaceAnalystRequest;
import com.taesan.analyst.domain.dto.request.PlaceReceiptRequest;
import com.taesan.analyst.domain.dto.response.PlaceAnalystResponse;
import com.taesan.analyst.domain.dto.response.PlaceReceiptResponse;
import com.taesan.analyst.global.api.ApiResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.taesan.analyst.global.api.ApiResult.OK;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/analyst-management/analysts")
public class AnalystAPI {

    @PostMapping("/place")
    public ApiResult<PlaceAnalystResponse> analyzePlace(
            @RequestBody PlaceAnalystRequest placeAnalystRequest
    ) {
        PlaceAnalystResponse placeAnalystResponse = new PlaceAnalystResponse("식당");
        return OK(placeAnalystResponse);
    }

    @PostMapping("/receipt")
    public ApiResult<PlaceReceiptResponse> analyzePlace(
            @RequestBody PlaceReceiptRequest placeAnalystRequest
    ) {
        PlaceReceiptResponse res = PlaceReceiptResponse.builder()
                .name("환타")
                .productCategory("음료")
                .build();

        return OK(res);
    }

}
