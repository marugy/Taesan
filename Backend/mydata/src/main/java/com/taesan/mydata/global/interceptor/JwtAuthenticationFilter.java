//package com.taesan.mydata.global.interceptor;
//
//import com.taesan.mydata.global.util.JwtUtils;
//import io.jsonwebtoken.JwtException;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.GenericFilterBean;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Component
//@RequiredArgsConstructor
//public class JwtAuthenticationFilter extends GenericFilterBean {
//
//    private final JwtUtils jwtUtils;
//
//    @Override
//    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//        String token = resolveToken((HttpServletRequest) request);
//        try {
//            // 토큰 유효성 검사
//            if (token != null && jwtUtils.validateToken(token)) {
//                Authentication authentication = jwtTokenProvider.getAuthentication(token);
//                SecurityContextHolder.getContext().setAuthentication(authentication);
//            }
//            chain.doFilter(request, response);
//        } catch (JwtException e) {
//            setErrorResponse((HttpServletResponse) response);
//        }
//    }
//
//    private String resolveToken(HttpServletRequest request) {
//        System.out.println("resolveToken 호출");
//        String accessToken = request.getHeader("Authorization");
//        System.out.println("AccessToken:" + accessToken);
//        if (accessToken != null && jwtUtils.validateToken(accessToken)) {
//            return accessToken;
//        }
//        return null;
//    }
//
//    public void setErrorResponse(HttpServletResponse response) throws IOException {
//        response.setStatus(401);
//        response.setHeader("msg", "Check the tokens.");
//    }
//}
