package com.ts.taesan.domain.analyst.api;

import com.ts.taesan.domain.analyst.api.dto.request.PlaceAnalystRequest;
import com.ts.taesan.domain.analyst.api.dto.request.ReceiptAnalystRequest;
import com.ts.taesan.domain.analyst.service.dto.AnalystService;
import com.ts.taesan.domain.analyst.service.dto.response.*;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.ApiOperation;
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
    @ApiOperation(value = "장소 카테고리 분석 정보 불러오기", notes = "카테고리 분석에서 장소에 대한 분석 정보를 불러오는 API")
    @PostMapping("/place/{cardId}")
    public ApiResponse<PlaceAnalystResponse> analyzePlace(@RequestBody PlaceAnalystRequest request, @PathVariable Long cardId) {
        PlaceAnalystResponse result = analystService.placeAnlystResponse(cardId, request.getYear(), request.getMonth());
        return OK(result);
    }

    @ApiOperation(value = "영수증 카테고리 분석 정보 불러오기", notes = "카테고리 분석에서 영수증에 대한 분석 정보를 불러오는 API")
    @PostMapping("/receipt/{cardId}")
    public ApiResponse<ReceiptAnalystResponse> analyzeReceipt(@RequestBody ReceiptAnalystRequest request, @PathVariable Long cardId) {
        ReceiptAnalystResponse result = analystService.receiptAnalystResponse(cardId, request.getYear(), request.getMonth());
        return OK(result);
    }

    @ApiOperation(value = "영수증 등록", notes = "클로버 OCR API와 연동하여 영수증을 등록하는 API")
    @PostMapping("/receipt")
    public ApiResponse<OCRReceiptList> ocrReceipt(@RequestPart(value="img")MultipartFile file){
        OCRReceiptList result = analystService.naverReceipt(file);
        return OK(result);
    }

    @ApiOperation(value = "더미 영수증 등록", notes = "정해진 영수증 OCR 결과를 반환하는 API")
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
