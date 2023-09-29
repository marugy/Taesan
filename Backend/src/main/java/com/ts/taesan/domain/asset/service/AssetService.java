package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.global.openfeign.auth.AuthClient;
import com.ts.taesan.global.openfeign.auth.dto.request.TokenRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AssetService {

    private final AuthClient authClient;
    private final MemberRepository memberRepository;

    @Value("${org-code}")
    private String orgCode;

    public void connectAssets(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        String tranId = "1234567890M00000000000001";
        TokenRequest tokenRequest = TokenRequest.builder()
                .org_code(orgCode)
                .grant_type("authorization_code")
                .client_id("taesan")
                .client_id("taesanSecretPassword")
                .redirect_uri("https://j9c211.p.ssafy.io/blahblah")
                .build();
        String accessToken = authClient.getAccessToken(member.getId(), tranId, tokenRequest).getBody().getAccess_token();
        member.earnMydataAccessToken("Bearer " + accessToken);
    }

}
