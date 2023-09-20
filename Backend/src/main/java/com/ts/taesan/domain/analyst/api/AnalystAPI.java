package com.ts.taesan.domain.analyst.api;

import com.ts.taesan.domain.analyst.api.dto.request.PlaceAnalystRequest;
import com.ts.taesan.domain.analyst.api.dto.request.ReceiptAnalystRequest;
import com.ts.taesan.domain.analyst.dto.response.Info;
import com.ts.taesan.domain.analyst.dto.response.PlaceAnalystResponse;
import com.ts.taesan.domain.analyst.dto.response.ReceiptAnalystResponse;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;


@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/analyst-management/analysts")
public class AnalystAPI {

    @PostMapping("/place")
    public ApiResponse<PlaceAnalystResponse> analyzePlace(@RequestBody PlaceAnalystRequest request) {
        List<Info> infos = new ArrayList<>();
        infos.add(new Info("1", "교통", Long.parseLong("10000")));
        infos.add(new Info("2", "카페", Long.parseLong("30000")));

        PlaceAnalystResponse placeAnalystResponse = new PlaceAnalystResponse();
        placeAnalystResponse.setInfos(infos);
        placeAnalystResponse.setYear("2023");
        placeAnalystResponse.setMonth("9");

        return OK(placeAnalystResponse);
    }

    @PostMapping("/receipt")
    public ApiResponse<ReceiptAnalystResponse> analyzePlace(@RequestBody ReceiptAnalystRequest request) {
        List<Info> infos = new ArrayList<>();
        infos.add(new Info("1", "과일/야채", Long.parseLong("10000")));
        infos.add(new Info("2", "즉석식품", Long.parseLong("30000")));
        ReceiptAnalystResponse response = new ReceiptAnalystResponse();
        response.setInfos(infos);
        response.setYear("2023");
        response.setMonth("9");
        return OK(response);
    }

}
