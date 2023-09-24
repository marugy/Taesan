//package com.ts.taesan.global.config;
//
//import com.ts.taesan.domain.member.interceptor.JwtAuthenticationFilter;
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@RequiredArgsConstructor
//public class WebConfig implements WebMvcConfigurer {
//
//    private final JwtAuthenticationFilter jwtAuthenticationFilter;
//
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(jwtAuthenticationFilter).addPathPatterns("/api/member-management/members/user/test");
////        registry.addInterceptor(jwtTokenInterceptor).addPathPatterns("/**");
//    }
//}
