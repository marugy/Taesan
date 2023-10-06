package com.ts.taesan.domain.analyst.req;

import com.ts.taesan.domain.analyst.req.dto.ReceiptOcrDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@FeignClient(name = "naver", url = "https://y1zvm00qd7.apigw.ntruss.com/custom/v1/25194/b4d7a3840b5679238d8e518429a8763afa65ab3ada67daf80a3f5b999e4785ef/document/receipt",
        configuration = AnalystFeignConfig.class)
public interface AnalystClient {
    @PostMapping(value="", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Optional<ReceiptOcrDto> analystReceipt(@RequestHeader("X-OCR-SECRET") String key,
                                                  @RequestPart(value = "message")String message,
                                                  @RequestPart(value = "file")MultipartFile file);
}
