package com.taesan.ifbuy.domain.api;

import com.taesan.ifbuy.domain.dto.request.IfbuyPossibilityRequest;
import com.taesan.ifbuy.domain.dto.request.IfbuyRegisterRequest;
import com.taesan.ifbuy.domain.dto.response.IfbuyItem;
import com.taesan.ifbuy.domain.dto.response.IfbuyListResponse;
import com.taesan.ifbuy.domain.dto.response.IfbuyPossibilityResponse;
import com.taesan.ifbuy.domain.dto.response.IfbuyRegisterResponse;
import com.taesan.ifbuy.global.api.ApiResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

import static com.taesan.ifbuy.global.api.ApiResult.OK;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/ifbuy-management/ifbuys")
public class IfbuyAPI {

    @GetMapping
    public ApiResult<IfbuyListResponse> getIfbuyList() {
        ArrayList<IfbuyItem> itemList = new ArrayList<>();
        itemList.add(new IfbuyItem());
        IfbuyListResponse build = IfbuyListResponse.builder()
                .itemList(itemList)
                .build();
        return OK(build);
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ApiResult<IfbuyRegisterResponse> postIfbuyList(
            @ModelAttribute("data") IfbuyRegisterRequest ifbuyRegisterRequest,
            @ModelAttribute("img") MultipartFile itemImg
    ) {
        return OK(new IfbuyRegisterResponse());
    }

    @GetMapping("/possibility")
    public ApiResult<IfbuyPossibilityResponse> askToTaesan(
            @ModelAttribute IfbuyPossibilityRequest ifbuyPossibilityRequest
    ) {
        return OK(new IfbuyPossibilityResponse());
    }

}
