package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.asset.api.dto.inner.Account;
import com.ts.taesan.domain.asset.api.dto.response.AccountListResponse;
import com.ts.taesan.domain.asset.api.dto.response.AssetResponse;
import com.ts.taesan.domain.asset.api.dto.inner.Card;
import com.ts.taesan.domain.asset.api.dto.response.CardListResponse;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.global.openfeign.bank.BankAccessUtil;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountDetail;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountInfo;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountList;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountDetailRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountInfoRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.openfeign.card.CardAccessUtil;
import com.ts.taesan.global.openfeign.card.CardClient;
import com.ts.taesan.global.openfeign.card.dto.inner.CardList;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AssetQueryService {

    private final BankAccessUtil bankAccessUtil;
    private final CardAccessUtil cardAccessUtil;
    private final MemberRepository memberRepository;
    private final TikkleRepository tikkleRepository;

    public AssetResponse getMyAssets(long memberId) {
        Member member = memberRepository.findById(memberId).get();

        if (member.getAccountNum() == null) {
            return AssetResponse.builder()
                    .connectedAsset(false)
                    .createdTikkle(false)
                    .account(null)
                    .cardList(null)
                    .build();
        } else {
            AccountInfo accountInfo = bankAccessUtil.getAccountInfo(member);
            AccountDetail accountDetail = bankAccessUtil.getAccountDetail(member);
            Account account = createAccount(member, accountInfo, accountDetail);

            List<CardList> cardList = cardAccessUtil.getCardList(member);
            List<Card> retCardList = cardList.stream().map(Card::new).collect(Collectors.toList());

            return AssetResponse.builder()
                    .connectedAsset(true)
                    .createdTikkle(tikkleRepository.existsByMemberId(memberId))
                    .account(account)
                    .cardList(retCardList)
                    .build();
        }

    }

    public AccountListResponse getMyAccountList(long memberId) {
        Member member = memberRepository.findById(memberId).get();

        List<AccountList> accountList = bankAccessUtil.getAccountList(member);
        List<Account> retAccountList = accountList.stream().map(Account::new).collect(Collectors.toList());

        return new AccountListResponse(retAccountList);
    }

    public CardListResponse getMyCardList(long memberId) {
        Member member = memberRepository.findById(memberId).get();

        List<CardList> cardList = cardAccessUtil.getCardList(member);
        List<Card> retCardList = cardList.stream().map(Card::new).collect(Collectors.toList());

        return new CardListResponse(retCardList);
    }

    private Account createAccount(Member member, AccountInfo accountInfo, AccountDetail accountDetail) {
        return Account.builder()
                .bank(accountInfo.getBank())
                .accountNum(member.getAccountNum())
                .accountName(accountDetail.getAccountName())
                .balance((long) accountDetail.getBalanceAmt())
                .build();
    }

}
