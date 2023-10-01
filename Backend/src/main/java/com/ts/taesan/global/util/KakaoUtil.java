package com.ts.taesan.global.util;

import com.ts.taesan.domain.transaction.req.KakaoResult;
import com.ts.taesan.domain.transaction.req.TransactionsClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@RequiredArgsConstructor
public class KakaoUtil {

    private final TransactionsClient transactionsClient;

    @Value("${kakao-key}")
    public String key;

    Map<String, String> categoryInfo = new ConcurrentHashMap<>();
    @PostConstruct
    private void init() {
        // 초기화 처리
        categoryInfo.put("MT1", "대형마트");
        categoryInfo.put("CS2", "편의점");
        categoryInfo.put("FD6", "음식점");
        categoryInfo.put("CE7", "카페");
        categoryInfo.put("HP8", "병원");
        categoryInfo.put("PM9", "병원");
        categoryInfo.put("PK6", "교통");
        categoryInfo.put("SW8", "교통");
        categoryInfo.put("OL7", "교통");
        categoryInfo.put("AT4", "여가");
        categoryInfo.put("AD5", "여가");
        categoryInfo.put("CT1", "여가");
    }

    public String getCategory(String shopName) {
        KakaoResult result = transactionsClient.loadUserByUsername(key, "전주24시콩나물국밥", 1, 1).get();
        return categoryInfo.get(result.getDocuments().get(0).getCategory_group_code());
    }
}
