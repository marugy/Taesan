package com.ts.taesan.global.openfeign.card;

import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.global.openfeign.card.dto.inner.CardList;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import com.ts.taesan.global.openfeign.card.dto.response.CardListResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CardAccessUtil {

    private final CardClient cardClient;
    private final MemberRepository memberRepository;
    private final TikkleRepository tikkleRepository;

    @Value("${org-code}")
    private String orgCode;

    public List<CardList> getCardList(Member member) {
        CardListResponse cardListResponse = cardClient.getCardList(
                        member.getMydataAccessToken(), getTranId(),
                        getApiType(),
                        createCardListRequest())
                .getBody();

        if (cardListResponse == null) {
            throw new RuntimeException("계좌 정보를 찾을 수 없습니다!!");
        }

        return cardListResponse.getCardList();
    }

    private String getApiType() {
        return "user-search";
    }

    private String getTranId() {
        return "1234567890M00000000000001";
    }

    private CardListRequest createCardListRequest() {
        return CardListRequest.builder()
                .org_code(orgCode)
                .search_timestamp(new Date().getTime())
                .next_page(0L)
                .limit(500)
                .build();
    }

}
