package com.taesan.mydata.global.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

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
        return Keys.hmacShaKeyFor(Base64.getEncoder().encodeToString(accessKeyPlain.getBytes(StandardCharsets.UTF_8)).getBytes());
    }

    // 키 생성
    protected SecretKey createRefreshKey() {
        return Keys.hmacShaKeyFor(Base64.getEncoder().encodeToString(refreshKeyPlain.getBytes(StandardCharsets.UTF_8)).getBytes());
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
            sb.append(scope).append('_');
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
            return !getClaimsAccessToken(jwtToken).getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    public Claims getClaimsAccessToken(String jwtToken) {
        return Jwts.parserBuilder()
                .setSigningKey(getAccessKey()).build()
                .parseClaimsJws(jwtToken.substring(7))
                .getBody();
    }

    public Authentication getAuthentication(String accessToken) {
        //토큰 복호화
        Claims claims = getClaimsAccessToken(accessToken);

        if (claims.get("user-ci") == null) {
            throw new RuntimeException("권한 정보가 없는 토큰입니다.");
        }

        // 나중에 최적화 할수도 있을듯
        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get("user-ci").toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());
        UserDetails principal = new User(claims.get("user-ci").toString(), "", authorities);
        return new UsernamePasswordAuthenticationToken(principal, "", authorities);
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

