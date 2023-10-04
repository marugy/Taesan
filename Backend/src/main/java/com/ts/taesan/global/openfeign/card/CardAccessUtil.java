package com.ts.taesan.global.openfeign.card;

import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.transaction.entity.Transaction;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.request.ChargeRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.TransferRequest;
import com.ts.taesan.global.openfeign.card.dto.inner.CardList;
import com.ts.taesan.global.openfeign.card.dto.inner.CardTransactionList;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import com.ts.taesan.global.openfeign.card.dto.request.CardTransactionListRequest;
import com.ts.taesan.global.openfeign.card.dto.request.PayRequest;
import com.ts.taesan.global.openfeign.card.dto.response.CardListResponse;
import com.ts.taesan.global.openfeign.card.dto.response.CardTransactionListResponse;
import com.ts.taesan.global.util.InterestCalculateUtil;
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

    @Value("${org-code}")
    private String orgCode;

    public List<CardTransactionList> getCardTransactionList(Member member, CardList card) {
        CardTransactionListResponse cardTransactionListResponse = cardClient.getCardTransactionList(
                        member.getMydataAccessToken(),
                        getTranId(),
                        getApiType(),
                        card.getCardId(),
                        createCardTransactionListRequest())
                .getBody();

        if (cardTransactionListResponse == null) {
            throw new RuntimeException("카드 결제 정보를 찾을 수 없습니다!!");
        }

        return cardTransactionListResponse.getApprovedList();
    }

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

    public void pay(Member member, Long cardId, Transaction transaction) {
        cardClient.pay(member.getMydataAccessToken(), cardId, transaction);
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

    private CardTransactionListRequest createCardTransactionListRequest() {
        return CardTransactionListRequest.builder()
                .org_code(orgCode)
                .limit(500)
                .build();
    }

}
