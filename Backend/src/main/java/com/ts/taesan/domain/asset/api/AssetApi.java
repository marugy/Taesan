package com.ts.taesan.domain.asset.api;

import com.ts.taesan.domain.asset.api.dto.request.TaesanPayRequest;
import com.ts.taesan.domain.asset.api.dto.response.AccountListResponse;
import com.ts.taesan.domain.asset.api.dto.response.AssetResponse;
import com.ts.taesan.domain.asset.api.dto.response.CardListResponse;
import com.ts.taesan.domain.asset.service.AssetQueryService;
import com.ts.taesan.domain.asset.service.AssetService;
import com.ts.taesan.global.api.ApiResponse;
import com.ts.taesan.global.openfeign.card.dto.request.PayRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@RequestMapping("/api/asset-management/assets")
@RequiredArgsConstructor
@Slf4j
public class AssetApi {

    private final AssetQueryService assetQueryService;

    private final AssetService assetService;

    @GetMapping("/main")
    public ApiResponse<AssetResponse> getMyAssetsInMainPage(
            @AuthenticationPrincipal User user
    ) {
        return OK(assetQueryService.getMyAssets(Long.parseLong(user.getUsername())));
    }

    @GetMapping("/account/list")
    public ApiResponse<AccountListResponse> getMyAccountList(
            @AuthenticationPrincipal User user
    ) {
        return OK(assetQueryService.getMyAccountList(Long.parseLong(user.getUsername())));
    }

    @GetMapping("/card/list")
    public ApiResponse<CardListResponse> getMyCardList(
            @AuthenticationPrincipal User user
    ) {
        return OK(assetQueryService.getMyCardList(Long.parseLong(user.getUsername())));
    }

    @PostMapping("/authenticate")
    public ApiResponse<Void> connectAssets(
            @AuthenticationPrincipal User user
    ) {
        assetService.connectAssets(Long.parseLong(user.getUsername()));
        return OK(null);
    }

    @PostMapping("/{card_id}/pay")
    public ApiResponse<Void> pay(
            @AuthenticationPrincipal User user,
            HttpServletRequest request,
            @PathVariable("card_id") Long cardId,
            @RequestBody TaesanPayRequest payRequest
            ) {
        assetService.pay(Long.parseLong(user.getUsername()), cardId, payRequest);
        return OK(null);
    }

    @PostMapping("/transfer")
    public ApiResponse<Void> transfer(
            @AuthenticationPrincipal User user
    ) {
        assetService.transfer(Long.parseLong(user.getUsername()));
        return OK(null);
    }

//    @PostMapping("/charge")
//    public ApiResponse<Void> charge(
//            @AuthenticationPrincipal User user
//    ) {
//        assetService.charge(Long.parseLong(user.getUsername()));
//        return OK(null);
//    }

}
