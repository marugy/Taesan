package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.asset.api.dto.inner.Card;
import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import com.ts.taesan.domain.asset.api.dto.request.TaesanPayRequest;
import com.ts.taesan.domain.asset.api.dto.response.CardHistoryListResponse;
import com.ts.taesan.domain.asset.entity.PayHistory;
import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.PayHistoryRepository;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.transaction.entity.Transaction;
import com.ts.taesan.domain.transaction.repository.TransactionRepository;
import com.ts.taesan.global.openfeign.auth.AuthAccessUtil;
import com.ts.taesan.global.openfeign.auth.AuthClient;
import com.ts.taesan.global.openfeign.auth.dto.request.TokenRequest;
import com.ts.taesan.global.openfeign.bank.BankAccessUtil;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.request.ChargeRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.TransferRequest;
import com.ts.taesan.global.openfeign.card.CardAccessUtil;
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
    private final PayHistoryRepository payHistoryRepository;
    private final KakaoUtil kakaoUtil;
    private final BankAccessUtil bankAccessUtil;
    private final CardAccessUtil cardAccessUtil;
    private final AuthAccessUtil authAccessUtil;

    public void transfer(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        bankAccessUtil.transfer(member);
    }

    public void saveMoney(Long memberId, Long amount, int serviceType) {
        Member member = memberRepository.findById(memberId).get();
        Tikkle tikkle = tikkleRepository.findByMemberId(memberId).get();

        // 이체
        bankAccessUtil.charge(member, amount);

        // 내역 생성
        PayHistory payHistory = PayHistory.builder()
                .tikkle(tikkle)
                .transType(serviceType)
                .transAmount(amount)
                .totalAmount(tikkle.getMoney())
                .build();
        payHistoryRepository.save(payHistory);

        // 티끌 머니 잔액 계산
        tikkle.updateMoney(amount);
    }

    public void pay(Long memberId, Long cardId, String accessToken, TaesanPayRequest payRequest) {
        Member member = memberRepository.findById(memberId).get();
        PayRequest request = new PayRequest(payRequest.getShopName(), payRequest.getPayAmt(), accessToken);
        cardAccessUtil.pay(member, cardId, request);
    }

    public void connectAssets(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        String mydataAccessToken = authAccessUtil.getMydataAccessToken(member);
        member.earnMydataAccessToken("Bearer " + mydataAccessToken);

        // 생성된 더미데이터 카테고리 추가해서 저장
        List<CardList> cardList = cardAccessUtil.getCardList(member);
        for (CardList card : cardList) {
            List<CardTransactionList> approvedList = cardAccessUtil.getCardTransactionList(member, card);
            List<CardHistoryList> historyList = approvedList.stream().map(CardHistoryList::new).collect(Collectors.toList());
            List<Transaction> transactionList = new ArrayList<>();
            for (CardHistoryList history : historyList) {
                String category = kakaoUtil.getCategory(history.getMerchantName());
                transactionList.add(new Transaction(history, card.getCardId(), category, member));
            }
            transactionRepository.saveAll(transactionList);
        }

    }

}
