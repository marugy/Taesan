package com.ts.taesan.domain.asset.api;

import com.ts.taesan.domain.asset.api.dto.response.AssetResponse;
import com.ts.taesan.domain.asset.service.TikkleQueryService;
import com.ts.taesan.domain.asset.service.TikkleService;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@RequestMapping("/api/asset-management/tikkle")
@RequiredArgsConstructor
@Slf4j
public class TikkleApi {

    private final TikkleQueryService tikkleQueryService;
    private final TikkleService tikkleService;

//    @PostMapping("/tikkle")
//    public ApiResponse<Integer> getSavingInfo() {
//        return OK(30000);
//    }

//    @GetMapping
//    public ApiResponse<AssetResponse> getMyAssets(
//            @AuthenticationPrincipal User user
//    ) {
//        return OK(tikkleQueryService.getMyAssets(Long.parseLong(user.getUsername())));
//    }
//
//    @PostMapping
//    public ApiResponse<Void> connectAssets(
//            @AuthenticationPrincipal User user
//    ) {
//        tikkleService.connectAssets(Long.parseLong(user.getUsername()));
//        return OK(null);
//    }

}
