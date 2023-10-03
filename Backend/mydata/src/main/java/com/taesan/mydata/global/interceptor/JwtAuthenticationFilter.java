package com.taesan.mydata.global.interceptor;

import com.taesan.mydata.global.util.JwtUtils;
import io.jsonwebtoken.JwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtUtils jwtUtils;

    private String resolveToken(HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        if (accessToken != null && jwtUtils.validateToken(accessToken)) {
            return accessToken;
        }
        return null;
    }

    public void setErrorResponse(HttpServletResponse response) throws IOException {
        response.setStatus(401);
        response.setHeader("msg", "Check the tokens.");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        String token = resolveToken((HttpServletRequest) request);
        try {
            if(token!=null){
                Authentication authentication = jwtUtils.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            chain.doFilter(request, response);
        } catch (JwtException e) {
            setErrorResponse((HttpServletResponse) response);
        }
    }
}
