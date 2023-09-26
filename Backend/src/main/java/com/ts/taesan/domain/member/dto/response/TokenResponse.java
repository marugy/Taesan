package com.ts.taesan.domain.member.dto.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class TokenResponse {
    private String accessToken;
    private String refreshToken;
    private Long userId;
}
