package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.asset.api.dto.inner.Account;
import com.ts.taesan.domain.asset.api.dto.response.AccountListResponse;
import com.ts.taesan.domain.asset.api.dto.response.AssetResponse;
import com.ts.taesan.domain.asset.api.dto.inner.Card;
import com.ts.taesan.domain.asset.api.dto.response.CardListResponse;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountDetail;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountInfo;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountList;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountDetailRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountInfoRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
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

    private final BankClient bankClient;
    private final CardClient cardClient;
    private final MemberRepository memberRepository;
    private final TikkleRepository tikkleRepository;

    @Value("${org-code}")
    private String orgCode;

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
            String tranId = getTranId();
            String apiType = getApiType();
            String accessToken = member.getMydataAccessToken();

            AccountInfo accountInfo = getAccountInfo(tranId, apiType, accessToken, member);
            AccountDetail accountDetail = getAccountDetail(tranId, apiType, accessToken, member);
            Account account = getAccount(member, accountInfo, accountDetail);

            List<CardList> cardList = cardClient.getCardList(accessToken, tranId, apiType, getCardListRequest()).getBody().getCardList();
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
        String tranId = getTranId();
        String apiType = getApiType();
        Member member = memberRepository.findById(memberId).get();

        AccountListRequest request = AccountListRequest.builder()
                .org_code(orgCode)
                .search_timestamp(new Date().getTime())
                .next_page(0)
                .limit(500)
                .build();

        List<AccountList> accountList = bankClient.getAccountList(member.getMydataAccessToken(), tranId, apiType, request).getBody().getAccountList();
        List<Account> retAccountList = accountList.stream().map(Account::new).collect(Collectors.toList());

        return new AccountListResponse(retAccountList);
    }

    public CardListResponse getMyCardList(long memberId) {
        String tranId = getTranId();
        String apiType = getApiType();
        Member member = memberRepository.findById(memberId).get();

        List<CardList> cardList = cardClient.getCardList(member.getMydataAccessToken(), tranId, apiType, getCardListRequest()).getBody().getCardList();
        List<Card> retCardList = cardList.stream().map(Card::new).collect(Collectors.toList());

        return new CardListResponse(retCardList);
    }

    private String getApiType() {
        return "user-search";
    }

    private String getTranId() {
        return "1234567890M00000000000001";
    }

    private Account getAccount(Member member, AccountInfo accountInfo, AccountDetail accountDetail) {
        return Account.builder()
                .bank(accountInfo.getBank())
                .accountNum(member.getAccountNum())
                .accountName(accountDetail.getAccountName())
                .balance((long) accountDetail.getBalanceAmt())
                .build();
    }

    private CardListRequest getCardListRequest() {
        return CardListRequest.builder()
                .org_code(orgCode)
                .search_timestamp(new Date().getTime())
                .next_page(0L)
                .limit(500)
                .build();
    }

    private AccountDetail getAccountDetail(String tranId, String apiType, String accessToken, Member member) {
        return bankClient.getAccountDetail(accessToken, tranId, apiType, getAccountDetailRequest(member)).getBody().getDetailList().get(0);
    }

    private AccountDetailRequest getAccountDetailRequest(Member member) {
        return AccountDetailRequest.builder()
                .org_code(orgCode)
                .account_num(member.getAccountNum())
                .seqno(1)
                .search_timestamp(new Date().getTime())
                .build();
    }

    private AccountInfoRequest getAccountInfoRequest(Member member) {
        return AccountInfoRequest.builder()
                .org_code(orgCode)
                .account_num(member.getAccountNum())
                .seqno(1)
                .search_timestamp(new Date().getTime())
                .next_page(0L)
                .limit(500)
                .build();
    }

    private AccountInfo getAccountInfo(String tranId, String apiType, String accessToken, Member member) {
        return bankClient.getAccountInfo(accessToken, tranId, apiType, getAccountInfoRequest(member)).getBody().getBasicList().get(0);
    }

}
