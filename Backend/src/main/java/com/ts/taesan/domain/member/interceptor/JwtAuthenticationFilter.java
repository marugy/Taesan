package com.ts.taesan.domain.member.interceptor;

import com.ts.taesan.domain.member.token.JwtTokenProvider;
import io.jsonwebtoken.JwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        log.info(request.toString());
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
        System.out.println("resolveToken");
        String accessToken = request.getHeader("ACCESS-TOKEN");

        System.out.println("AccessToken : " + accessToken);
        if (accessToken != null && jwtTokenProvider.isValidAccessToken(accessToken)) {
            return accessToken;
        }
        return null;
    }

    public void setErrorResponse(HttpServletResponse response) throws IOException {
        response.setStatus(401);
        response.setHeader("msg", "Check the tokens.");
    }
}
