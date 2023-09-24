package com.taesan.mydata.global.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Component
public class JwtUtils {

    @Value("${jwt.access.key}")
    private String accessKeyPlain;

    @Value("${jwt.refresh.key}")
    private String refreshKeyPlain;

    @Value("${jwt.access.valid-time}")
    private long accessTokenValid;

    @Value("${jwt.refresh.valid-time}")
    private long refreshTokenValid;

    private SecretKey accessKey;

    private SecretKey refreshKey;

    public SecretKey getAccessKey() {
        if (accessKey == null) {
            accessKey = createAccessKey();
        }

        return accessKey;
    }

    public SecretKey getRefreshKey() {
        if (refreshKey == null) {
            refreshKey = createRefreshKey();
        }

        return refreshKey;
    }

    // 키 생성
    protected SecretKey createAccessKey() {
        return Keys.hmacShaKeyFor(Base64.getEncoder().encodeToString(accessKeyPlain.getBytes()).getBytes());
    }

    // 키 생성
    protected SecretKey createRefreshKey() {
        return Keys.hmacShaKeyFor(Base64.getEncoder().encodeToString(refreshKeyPlain.getBytes()).getBytes());
    }

    // JWT 토큰 생성
    public String createAccessToken(long userCi) {
        return Jwts.builder()
                .setHeader(createHeader())
                .setClaims(createClaims(true, userCi))
                .signWith(getAccessKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // JWT 토큰 생성
    public String createRefreshToken(long userCi) {
        return Jwts.builder()
                .setHeader(createHeader())
                .setClaims(createClaims(false, userCi))
                .signWith(getRefreshKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Map<String, Object> createHeader() {
        Map<String, Object> header = new HashMap<>();

        header.put("typ","JWT");
        header.put("alg","HS256");

        return header;
    }

    private Claims createClaims(boolean isAccessToken, long userCi) {
        Claims claims = Jwts.claims();

        claims.setIssuer("Bank");
        claims.setAudience("Taesan");
        claims.setId(UUID.randomUUID().toString());
        claims.setExpiration(new Date(new Date().getTime() + (isAccessToken ? accessTokenValid : refreshTokenValid)));
        claims.put("scope", setScope());
        claims.put("user-ci", userCi);

        return claims;
    }

    private String setScope() {
        List<String> scopeList = getAllowedScopes();
        StringBuilder sb = new StringBuilder();

        for (String scope : scopeList) {
            sb.append(scope).append(' ');
        }

        return sb.substring(0, sb.length() - 1);
    }

    private List<String> getAllowedScopes() {
        List<String> scopeList = new ArrayList<>();

        scopeList.add("bank.list");
        scopeList.add("bank.deposit");
        scopeList.add("card.list");
        scopeList.add("card.card");

        return scopeList;
    }

    public String getAccessTokenValid() {
        return Long.toString(accessTokenValid);
    }

    public String getRefreshTokenValid() {
        return Long.toString(refreshTokenValid);
    }

    public String resolveToken(HttpServletRequest request) {
        return request.getHeader("Authorization");
    }

    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder()
                    .setSigningKey(accessKey).build()
                    .parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    public String getUserCi(String jwtToken) {
        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(accessKey).build()
                .parseClaimsJws(jwtToken);

        return (String) claims.getBody().get("user-ci");
    }

    public String getScope(String jwtToken) {
        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(accessKey).build()
                .parseClaimsJws(jwtToken);

        return (String) claims.getBody().get("user-ci");
    }

}
