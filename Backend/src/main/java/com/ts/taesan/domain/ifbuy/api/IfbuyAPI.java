package com.ts.taesan.domain.ifbuy.api;

import com.ts.taesan.domain.ifbuy.dto.request.IfbuyPossibilityRequest;
import com.ts.taesan.domain.ifbuy.dto.request.IfbuyRegisterRequest;
import com.ts.taesan.domain.ifbuy.dto.response.IfbuyItem;
import com.ts.taesan.domain.ifbuy.dto.response.IfbuyListResponse;
import com.ts.taesan.domain.ifbuy.dto.response.IfbuyPossibilityResponse;
import com.ts.taesan.domain.ifbuy.dto.response.IfbuyRegisterResponse;
import com.ts.taesan.global.api.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/ifbuy-management/ifbuys")
public class IfbuyAPI {

    @GetMapping
    public ApiResponse<IfbuyListResponse> getIfbuyList() {
        ArrayList<IfbuyItem> itemList = new ArrayList<>();
        itemList.add(new IfbuyItem());
        IfbuyListResponse build = IfbuyListResponse.builder()
                .itemList(itemList)
                .build();
        return OK(build);
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ApiResponse<IfbuyRegisterResponse> postIfbuyList(
            @ModelAttribute("data") IfbuyRegisterRequest ifbuyRegisterRequest,
            @ModelAttribute("img") MultipartFile itemImg
    ) {
        return OK(new IfbuyRegisterResponse());
    }

    @GetMapping("/possibility")
    public ApiResponse<IfbuyPossibilityResponse> askToTaesan(
            @ModelAttribute IfbuyPossibilityRequest ifbuyPossibilityRequest
    ) {
        return OK(new IfbuyPossibilityResponse());
    }

}
