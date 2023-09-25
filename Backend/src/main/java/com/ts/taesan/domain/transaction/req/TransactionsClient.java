package com.ts.taesan.domain.transaction.req;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@FeignClient(name = "kakao", url = "https://dapi.kakao.com/v2/local/search/keyword.json", configuration = OpenFeignConfig.class)
public interface TransactionsClient {
//    @GetMapping("keyword={name}&page=1&size=1")
//    public Optional<KakaoResult> loadUserByUsername(@RequestHeader("Authorization") String key, @PathVariable String name);
@GetMapping("")
public Optional<KakaoResult> loadUserByUsername(@RequestHeader("Authorization") String key,
                                                @RequestParam(value = "query") String keyword, @RequestParam(value = "page") Integer page
        , @RequestParam(value = "size") Integer size);
}
