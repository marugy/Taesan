package com.ts.taesan.domain.analyst.api;

import com.ts.taesan.domain.analyst.api.dto.request.PlaceAnalystRequest;
import com.ts.taesan.domain.analyst.api.dto.request.ReceiptAnalystRequest;
import com.ts.taesan.domain.analyst.service.dto.AnalystService;
import com.ts.taesan.domain.analyst.service.dto.response.*;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;


@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/analyst-management/analysts")
public class AnalystAPI {

    private final AnalystService analystService;
    @PostMapping("/place/{cardId}")
    public ApiResponse<PlaceAnalystResponse> analyzePlace(@RequestBody PlaceAnalystRequest request, @PathVariable Long cardId) {
        PlaceAnalystResponse result = analystService.placeAnlystResponse(cardId, request.getYear(), request.getMonth());
        return OK(result);
    }

    @PostMapping("/receipt/{cardId}")
    public ApiResponse<ReceiptAnalystResponse> analyzeReceipt(@RequestBody ReceiptAnalystRequest request, @PathVariable Long cardId) {
        ReceiptAnalystResponse result = analystService.receiptAnalystResponse(cardId, request.getYear(), request.getMonth());
        return OK(result);
    }

    @PostMapping("/receipt")
    public ApiResponse<OCRReceiptList> ocrReceipt(@RequestPart(value="img")MultipartFile file){
        OCRReceiptList result = analystService.naverReceipt(file);
        return OK(result);
    }
    @GetMapping("/receipt/test")
    public ApiResponse<OCRReceiptList> ocrTest(){
        OCRReceiptDTO val01 = new OCRReceiptDTO("참이슬", Long.parseLong("10000"), Long.parseLong("5000"));
        OCRReceiptDTO val02 = new OCRReceiptDTO("오뎅탕", Long.parseLong("12000"), Long.parseLong("12000"));
        List<OCRReceiptDTO> list = new ArrayList<>();
        list.add(val01);
        list.add(val02);

        OCRReceiptList result = new OCRReceiptList(list, Long.parseLong("22000"));
        return OK(result);
    }
}
