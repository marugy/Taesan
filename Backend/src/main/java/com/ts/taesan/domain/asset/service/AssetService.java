package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.asset.api.dto.inner.Card;
import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import com.ts.taesan.domain.asset.api.dto.response.CardHistoryListResponse;
import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.transaction.entity.Transaction;
import com.ts.taesan.domain.transaction.repository.TransactionRepository;
import com.ts.taesan.global.openfeign.auth.AuthClient;
import com.ts.taesan.global.openfeign.auth.dto.request.TokenRequest;
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
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AssetService {

    private final MemberRepository memberRepository;
    private final TikkleRepository tikkleRepository;
    private final TransactionRepository transactionRepository;
    private final AuthClient authClient;
    private final BankClient bankClient;
    private final CardClient cardClient;
    private final KakaoUtil kakaoUtil;
    private final InterestCalculateUtil calculateUtil;

    @Value("${org-code}")
    private String orgCode;

    // 적금통 해지시 이 로직 사용
    public void transfer(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        Tikkle tikkle = tikkleRepository.findByMemberId(memberId).get();
        TransferRequest transferRequest = TransferRequest.builder()
                .receiverAccNum(member.getAccountNum())
                .transAmt(calculateUtil.calculate(tikkle))
                .build();
        bankClient.transfer(member.getMydataAccessToken(), transferRequest);
    }

    // 다른 서비스에서 적금통으로 금액 저장시 이 로직 사용
    public void charge(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        Tikkle tikkle = tikkleRepository.findByMemberId(memberId).get();
        ChargeRequest chargeRequest = ChargeRequest.builder()
                .senderAccNum(member.getAccountNum())
                .transAmt(calculateUtil.calculate(tikkle))
                .build();
        bankClient.charge(member.getMydataAccessToken(), chargeRequest);
    }

    public void pay(Long memberId, Long cardId, PayRequest payRequest) {
        Member member = memberRepository.findById(memberId).get();
        cardClient.pay(member.getMydataAccessToken(), cardId, payRequest);
    }

    public void connectAssets(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        TokenRequest tokenRequest = TokenRequest.builder()
                .org_code(orgCode)
                .grant_type("authorization_code")
                .client_id("taesan")
                .client_id("taesanSecretPassword")
                .redirect_uri("https://j9c211.p.ssafy.io/blahblah")
                .build();
        String accessToken = authClient.getAccessToken(member.getId(), getTranId(), tokenRequest).getBody().getAccess_token();
        member.earnMydataAccessToken("Bearer " + accessToken);

        // 생성된 더미데이터 카테고리 추가해서 저장
        List<CardList> cardList = cardClient.getCardList(member.getMydataAccessToken(), getTranId(), getApiType(), getCardListRequest()).getBody().getCardList();
        for (CardList card : cardList) {
            List<CardTransactionList> approvedList = cardClient.getCardTransactionList(member.getMydataAccessToken(), getTranId(), getApiType(), card.getCardId(), getCardTransactionList()).getBody().getApprovedList();
            List<CardHistoryList> historyList = approvedList.stream().map(CardHistoryList::new).collect(Collectors.toList());
            List<Transaction> transactionList = new ArrayList<>();
            for (CardHistoryList history : historyList) {
                String category = kakaoUtil.getCategory(history.getMerchantName());
                transactionList.add(new Transaction(history, card.getCardId(), category));
            }
            transactionRepository.saveAll(transactionList);
        }

    }

    private CardListRequest getCardListRequest() {
        return CardListRequest.builder()
                .org_code(orgCode)
                .search_timestamp(new Date().getTime())
                .next_page(0L)
                .limit(500)
                .build();
    }

    private CardTransactionListRequest getCardTransactionList() {
        return CardTransactionListRequest.builder()
                .org_code(orgCode)
                .limit(500)
                .build();
    }

    private String getApiType() {
        return "user-search";
    }

    private String getTranId() {
        return "1234567890M00000000000001";
    }

}
