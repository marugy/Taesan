package com.ts.taesan.domain.transaction.req;

import com.ts.taesan.domain.transaction.api.dto.request.ReceiptReqDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@FeignClient(name = "AI", url = "http://localhost:8099", configuration = OpenFeignConfig.class)
public interface AIModelClient {
@PostMapping("")
public Optional<List<CategoryResult>> getCatetory(@RequestBody List<ReceiptReqDto> request);
}
