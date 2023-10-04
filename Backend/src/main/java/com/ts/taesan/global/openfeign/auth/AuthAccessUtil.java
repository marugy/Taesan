package com.ts.taesan.global.openfeign.auth;

import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import com.ts.taesan.domain.asset.entity.PayHistory;
import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.PayHistoryRepository;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.transaction.entity.Transaction;
import com.ts.taesan.domain.transaction.repository.TransactionRepository;
import com.ts.taesan.global.openfeign.auth.dto.request.TokenRequest;
import com.ts.taesan.global.openfeign.auth.dto.response.TokenResponse;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.request.ChargeRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.TransferRequest;
import com.ts.taesan.global.openfeign.card.CardClient;
import com.ts.taesan.global.openfeign.card.dto.inner.CardList;
import com.ts.taesan.global.openfeign.card.dto.inner.CardTransactionList;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import com.ts.taesan.global.openfeign.card.dto.request.CardTransactionListRequest;
import com.ts.taesan.global.openfeign.card.dto.request.PayRequest;
import com.ts.taesan.global.util.InterestCalculateUtil;
import com.ts.taesan.global.util.KakaoUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AuthAccessUtil {

    private final AuthClient authClient;

    @Value("${org-code}")
    private String orgCode;

    public String getMydataAccessToken(Member member) {
        TokenResponse tokenResponse = authClient.getAccessToken(
                        member.getId(),
                        getTranId(),
                        createTokenRequest())
                .getBody();

        if (tokenResponse == null) {
            throw new RuntimeException("토큰 정보를 얻을 수 없습니다!!");
        }

        return tokenResponse.getAccess_token();
    }

    public void addMydataAccessToken(Long memberId) {
        HashMap<String, String> map = new HashMap<>();
        map.put("user_ci", Long.toString(memberId));
        authClient.registerAuth(map);
    }

    private String getApiType() {
        return "user-search";
    }

    private String getTranId() {
        return "1234567890M00000000000001";
    }

    private TokenRequest createTokenRequest() {
        return TokenRequest.builder()
                .org_code(orgCode)
                .grant_type("authorization_code")
                .client_id("taesan")
                .client_secret("taesanSecretPassword")
                .redirect_uri("https://j9c211.p.ssafy.io/blahblah")
                .build();
    }

}
