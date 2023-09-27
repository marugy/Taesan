package com.ts.taesan.domain.tikkle.api;

import com.ts.taesan.domain.tikkle.api.dto.response.AssetResponse;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountList;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@RequestMapping("/api/asset-management/assets")
@RequiredArgsConstructor
@Slf4j
public class TikkleApi {

    private final BankClient bankClient;

    @GetMapping("/saving")
    public ApiResponse<Integer> getSavingInfo() {
        return OK(30000);
    }

    @GetMapping
    public AssetResponse getMyAssets(
            @AuthenticationPrincipal User user
    ) {
        log.warn("{}", user.getUsername());
//        log.info("{}", 1);
        String tranId = "1234567890M00000000000001";
        String apiType = "user-search";
        AccountListRequest request = AccountListRequest.builder()
                .org_code("ssafy00001")
                .search_timestamp(1265275107687L)
                .next_page(0)
                .limit(500)
                .build();

        List<AccountList> accountList = bankClient.getAccountList(Long.parseLong(user.getUsername()), tranId, apiType, request).getBody().getAccountList();
        log.info(accountList.get(0).getAccountNum());
        log.info(accountList.get(1).getBank());
        log.info(accountList.get(2).getProdName());
        return new AssetResponse();
    }

}
