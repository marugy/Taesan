package com.ts.taesan.domain.asset.api;

import com.ts.taesan.domain.asset.api.dto.request.TikkleCreateRequest;
import com.ts.taesan.domain.asset.api.dto.response.AssetResponse;
import com.ts.taesan.domain.asset.api.dto.response.TikkleInfoResponse;
import com.ts.taesan.domain.asset.service.TikkleQueryService;
import com.ts.taesan.domain.asset.service.TikkleService;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@RequestMapping("/api/asset-management/tikkle")
@RequiredArgsConstructor
@Slf4j
public class TikkleApi {

    private final TikkleQueryService tikkleQueryService;
    private final TikkleService tikkleService;

    @PostMapping
    public ApiResponse<Integer> createTikkle(
            @AuthenticationPrincipal User user,
            @RequestBody TikkleCreateRequest tikkleCreateRequest
            ) {
        tikkleService.save(Long.parseLong(user.getUsername()), tikkleCreateRequest.getEndDate());
        return OK(null);
    }

    @GetMapping
    public ApiResponse<TikkleInfoResponse> getMyAssets(
            @AuthenticationPrincipal User user
    ) {
        return OK(tikkleQueryService.getMyTikkleInfo(Long.parseLong(user.getUsername())));
    }

}
