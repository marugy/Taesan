package com.ts.taesan.domain.member.interceptor;

import com.ts.taesan.domain.member.token.JwtTokenProvider;
import io.jsonwebtoken.JwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        String token = resolveToken((HttpServletRequest) request);
        try {
            // 토큰 유효성 검사
            if (token != null && jwtTokenProvider.isValidAccessToken(token)) {
                Authentication authentication = jwtTokenProvider.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            chain.doFilter(request, response);
        } catch (JwtException e) {
            setErrorResponse((HttpServletResponse) response);
        }
    }

    private String resolveToken(HttpServletRequest request) {
        System.out.println("resolveToken 호출");
        String accessToken = request.getHeader("ACCESS_TOKEN");
        System.out.println("AccessToken:" + accessToken);
        if (accessToken != null && jwtTokenProvider.isValidAccessToken(accessToken)) {
            return accessToken;
        }
        return null;
    }

    public void setErrorResponse(HttpServletResponse response) throws IOException {
        response.setStatus(401);
        response.setHeader("msg", "Check the tokens.");
    }


//    @Override
//    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
//
//        System.out.println("JwtToken 호출");
//        String accessToken = request.getHeader("ACCESS_TOKEN");
//        System.out.println("AccessToken:" + accessToken);
//        String refreshToken = request.getHeader("REFRESH_TOKEN");
//        System.out.println("RefreshToken:" + refreshToken);
//
//        if (accessToken != null && jwtTokenProvider.isValidAccessToken(accessToken)) {
//            return true;
//        }
//
//        response.setStatus(401);
//        response.setHeader("ACCESS_TOKEN", accessToken);
//        response.setHeader("REFRESH_TOKEN", refreshToken);
//        response.setHeader("msg", "Check the tokens.");
//        return false;
//    }
}
