package com.ts.taesan.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    //    @Bean
//    public Docket api() {
//        return new Docket(DocumentationType.OAS_30)
//                .useDefaultResponseMessages(false)
//                .select()
//                .apis(RequestHandlerSelectors.basePackage("com.ts.taesan.domain"))
//                .paths(PathSelectors.any())
//                .build()
//                .host("https://j9c211.p.ssafy.io/api")
////                .securitySchemes(Arrays.asList(apiKey()))
////                .securityContexts(Arrays.asList(securityContext()))
//                .apiInfo(apiInfo());
//    }
//
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("TAESAN REST API")
                .description("금융 절약 플랫폼 TAESAN의 API 명세서 입니다")
                .version("1.0.0")
                .build();
    }

    @Bean
    public Docket commonApi() {
        return new Docket(DocumentationType.OAS_30) // 3.0 문서버전으로 세팅
                .groupName("example")
                .apiInfo(this.apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.ts.taesan.domain"))
                .paths(PathSelectors.ant("/**"))
                .build();
    }
}

