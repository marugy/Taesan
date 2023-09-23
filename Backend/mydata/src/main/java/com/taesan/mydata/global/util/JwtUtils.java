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
    private String keyPlain;

    @Value("${jwt.access.valid-time}")
    private long accessTokenValid;

    private SecretKey accessKey;

    public SecretKey getSecretKey() {
        if (accessKey == null) {
            accessKey = createKey();
        }

        return accessKey;
    }

    // 키 생성
    protected SecretKey createKey() {
        return Keys.hmacShaKeyFor(Base64.getEncoder().encodeToString(keyPlain.getBytes()).getBytes());
    }

    // JWT 토큰 생성
    public String createToken(String userCi) {
        return Jwts.builder()
                .setHeader(createHeader())
                .setClaims(createClaims(userCi))
                .signWith(getSecretKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Map<String, Object> createHeader() {
        Map<String, Object> header = new HashMap<>();

        header.put("typ","JWT");
        header.put("alg","HS256");

        return header;
    }

    private Claims createClaims(String userCi) {
        Claims claims = Jwts.claims();

        claims.setIssuer("Bank");
        claims.setAudience("Taesan");
        claims.setId(UUID.randomUUID().toString());
        claims.setExpiration(new Date(new Date().getTime() + accessTokenValid));
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
}
