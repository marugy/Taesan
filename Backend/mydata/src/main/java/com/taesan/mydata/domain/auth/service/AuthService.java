package com.taesan.mydata.domain.auth.service;

import com.taesan.mydata.domain.auth.api.dto.response.AuthResponse;
import com.taesan.mydata.domain.auth.api.dto.response.TokenCreateResponse;
import com.taesan.mydata.domain.auth.entity.Auth;
import com.taesan.mydata.domain.auth.repository.AuthRepository;
import com.taesan.mydata.global.util.JwtUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;


@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final AuthRepository authRepository;
    private final JwtUtils jwtUtils;

    public void registerToken(long userCi) {
        Auth auth = authRepository.save(
                Auth.builder()
                        .id(userCi)
                        .build());
    }

    public TokenCreateResponse getAccessToken(long userId) {
        if(!authRepository.existsById(userId)) {
            return null;        // 추후 에러처리 필요
        }

        log.info("{} entered", userId);
        String accessToken = jwtUtils.createAccessToken(userId);
        log.info("{} entered", userId);
        String refreshToken = jwtUtils.createRefreshToken(userId);

        log.info("{} entered", userId);
        return TokenCreateResponse.builder()
                .tokenType("Bearer")
                .accessToken(accessToken)
                .expiresIn(jwtUtils.getAccessTokenValid())
                .refreshToken(refreshToken)
                .refreshTokenExpiresIn(jwtUtils.getRefreshTokenValid())
                .scope("bank.list bank.deposit card.list card.card")
                .build();
    }
}
