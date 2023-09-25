package com.ts.taesan.domain.ifbuy.api;

import com.ts.taesan.domain.ifbuy.api.dto.request.IfbuyPossibilityRequest;
import com.ts.taesan.domain.ifbuy.api.dto.request.IfbuyRegisterRequest;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyItem;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyListResponse;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyPossibilityResponse;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyRegisterResponse;
import com.ts.taesan.domain.ifbuy.service.IfBuyService;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/ifbuy-management/ifbuys")
public class IfbuyAPI {
    private final IfBuyService ifBuyService;

    // 샀다치고 목록 가져오기
    @GetMapping
    public ApiResponse<IfbuyListResponse> getIfbuyList(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());
        IfbuyListResponse result =  ifBuyService.getIfbuyList(memberId);
        return OK(result);
    }

    // 샀다치고 등록하기
    @PostMapping("")
    public ApiResponse<IfbuyRegisterResponse> postIfbuyList(
            @RequestPart(value = "info") IfbuyRegisterRequest request,
            @RequestPart(value="images", required = false) MultipartFile images,
            @AuthenticationPrincipal User user
            ) {
        Long memberId = Long.parseLong(user.getUsername());
        ifBuyService.addIfBuy(memberId, request, images);

        return OK(new IfbuyRegisterResponse());
    }

    @GetMapping("/possibility")
    public ApiResponse<IfbuyPossibilityResponse> askToTaesan(
            @ModelAttribute IfbuyPossibilityRequest ifbuyPossibilityRequest
    ) {
        return OK(new IfbuyPossibilityResponse());
    }

}
