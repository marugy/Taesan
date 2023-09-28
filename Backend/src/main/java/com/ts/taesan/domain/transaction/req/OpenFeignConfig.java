package com.ts.taesan.domain.transaction.req;

import feign.Logger;
import feign.RequestInterceptor;
import org.springframework.context.annotation.Bean;

public class OpenFeignConfig {
    @Bean
    public RequestInterceptor requestInterceptor(){
        return requestTemplate -> {
            requestTemplate.header("Content-Type", "application/json");
            requestTemplate.header("Accept", "application/json");
        };
    }
    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL; // log레벨 설정
    }
}
