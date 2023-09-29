package com.ts.taesan.domain.tikkle.api;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.tikkle.api.dto.response.Account;
import com.ts.taesan.domain.tikkle.api.dto.response.AssetResponse;
import com.ts.taesan.domain.tikkle.api.dto.response.Card;
import com.ts.taesan.domain.tikkle.service.TikkleQueryService;
import com.ts.taesan.domain.tikkle.service.TikkleService;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountDetail;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountInfo;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountList;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountDetailRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountInfoRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.api.ApiResponse;
import com.ts.taesan.global.openfeign.card.CardClient;
import com.ts.taesan.global.openfeign.card.dto.inner.CardList;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@RequestMapping("/api/asset-management/assets")
@RequiredArgsConstructor
@Slf4j
public class TikkleApi {

    private final TikkleQueryService tikkleQueryService;
    private final TikkleService tikkleService;

//    @PostMapping("/tikkle")
//    public ApiResponse<Integer> getSavingInfo() {
//        return OK(30000);
//    }

    @GetMapping
    public ApiResponse<AssetResponse> getMyAssets(
            @AuthenticationPrincipal User user
    ) {
        return OK(tikkleQueryService.getMyAssets(Long.parseLong(user.getUsername())));
    }

    @PostMapping
    public ApiResponse<Void> connectAssets(
            @AuthenticationPrincipal User user
    ) {
        tikkleService.connectAssets(Long.parseLong(user.getUsername()));
        return OK(null);
    }

}
