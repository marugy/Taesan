package com.ts.taesan.domain.ifbuy.api;

import com.ts.taesan.domain.ifbuy.api.dto.request.IfbuyPossibilityRequest;
import com.ts.taesan.domain.ifbuy.api.dto.request.IfbuyRegisterRequest;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyItem;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyListResponse;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyPossibilityResponse;
import com.ts.taesan.domain.ifbuy.api.dto.response.IfbuyRegisterResponse;
import com.ts.taesan.domain.ifbuy.service.IfBuyService;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/ifbuy-management/ifbuys")
public class IfbuyAPI {
    private final IfBuyService ifBuyService;
    @Value("${file.dir}")
    public String basicPath;

    @ApiOperation(value = "샀다치고 목록 가져오기", notes = "샀다치고에 들어갔을 때 등록한 샀다치고의 목록을 가져오는 API")
    @GetMapping
    public ApiResponse<IfbuyListResponse> getIfbuyList(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());
        IfbuyListResponse result =  ifBuyService.getIfbuyList(memberId);
        return OK(result);
    }

    @ApiOperation(value = "샀다치고 등록하기", notes = "샀다치고에 물건을 등록하는 API")
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

    @ApiOperation(value = "이미지 불러오기", notes = "태산 서비스로부터 이미지를 불러오는 API")
    @GetMapping("/image/{path}")
    public ResponseEntity<?> showImage(@PathVariable String path){
        Resource resource = new FileSystemResource(basicPath+path);
        if(!resource.exists()){
            return new ResponseEntity<Resource>(HttpStatus.NOT_FOUND);
        }
        HttpHeaders header = new HttpHeaders();
        Path filePath = null;
        try{
            filePath = Paths.get(basicPath+path);
            header.add("Content-Type", Files.probeContentType(filePath));
        }catch (IOException e){
            e.printStackTrace();
        }
        return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);
    }
}
