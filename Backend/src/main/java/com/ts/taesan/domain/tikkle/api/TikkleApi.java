package com.ts.taesan.domain.tikkle.api;

import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@RequestMapping("api/tikkle-management/tikkles")
@RequiredArgsConstructor
public class TikkleApi {
    @GetMapping("/saving")
    public ApiResponse<Integer> getSavingInfo() {
        return OK(30000);
    }
}
