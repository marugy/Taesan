//package com.taesan.mydata.global.config;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.taesan.mydata.global.interceptor.JwtAuthenticationFilter;
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
//import org.springframework.security.web.SecurityFilterChain;
//
//@RequiredArgsConstructor
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final ObjectMapper objectMapper;
//    private final JwtAuthenticationFilter jwtAuthenticationFilter;
//
//    @Bean
//    public WebSecurityCustomizer configure() {
//        return (web) -> web.ignoring().mvcMatchers(
//                "/v3/api-docs/**",
//                "/api/v1/login" // 임시
//        );
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        return http.antMatcher("/**")
//                .authorizeRequests()
//                .antMatchers("/api/v1/**").hasAuthority(USER.name())
//                .and()
//                .httpBasic().disable()
//                .formLogin().disable()
//                .cors().disable()
//                .csrf().disable()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .authorizeRequests()
//                .anyRequest().permitAll()
//                .and()
//                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
//
//                .exceptionHandling()
//                .authenticationEntryPoint(((request, response, authException) -> {
//                    response.setStatus(HttpStatus.UNAUTHORIZED.value());
//                    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
//                    objectMapper.writeValue(
//                            response.getOutputStream(),
//                            ExceptionResponse.of(ExceptionCode.FAIL_AUTHENTICATION)
//                    );
//                }))
//                .accessDeniedHandler(((request, response, accessDeniedException) -> {
//                    response.setStatus(HttpStatus.FORBIDDEN.value());
//                    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
//                    objectMapper.writeValue(
//                            response.getOutputStream(),
//                            ExceptionResponse.of(ExceptionCode.FAIL_AUTHORIZATION)
//                    );
//                })).and().build();
//    }
//}