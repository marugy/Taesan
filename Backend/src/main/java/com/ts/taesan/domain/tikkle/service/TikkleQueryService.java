package com.ts.taesan.domain.tikkle.service;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.tikkle.api.dto.response.Account;
import com.ts.taesan.domain.tikkle.api.dto.response.AssetResponse;
import com.ts.taesan.domain.tikkle.api.dto.response.Card;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountDetail;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountInfo;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountDetailRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountInfoRequest;
import com.ts.taesan.global.openfeign.card.CardClient;
import com.ts.taesan.global.openfeign.card.dto.inner.CardList;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
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
public class TikkleQueryService {

    private final BankClient bankClient;
    private final CardClient cardClient;
    private final MemberRepository memberRepository;

    @Value("${org-code}")
    private String orgCode;

    @GetMapping
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
            String tranId = "1234567890M00000000000001";
            String apiType = "user-search";
            String accessToken = member.getMydataAccessToken();

            AccountInfo accountInfo = getAccountInfo(tranId, apiType, accessToken, member);
            AccountDetail accountDetail = getAccountDetail(tranId, apiType, accessToken, member);
            Account account = getAccount(member, accountInfo, accountDetail);

            List<CardList> cardList = cardClient.getCardList(accessToken, tranId, apiType, getCardListRequest()).getBody().getCardList();
            List<Card> retCardList = cardList.stream().map(Card::new).collect(Collectors.toList());

            return AssetResponse.builder()
                    .connectedAsset(true)
                    .createdTikkle(true)
                    .account(account)
                    .cardList(retCardList)
                    .build();
        }

        // 계좌 목록 조회 여기서 안쓰는데 잘못만듬. 나중에 옮기자.
//        AccountListRequest request = AccountListRequest.builder()
//                .org_code("ssafy00001")
//                .search_timestamp(1265275107687L)
//                .next_page(0)
//                .limit(500)
//                .build();

//        List<AccountList> accountList = bankClient.getAccountList(Long.parseLong(user.getUsername()), tranId, apiType, request).getBody().getAccountList();
    }

    private Account getAccount(Member member, AccountInfo accountInfo, AccountDetail accountDetail) {
        return Account.builder()
                .bank(accountInfo.getBank())
                .accountNum(member.getAccountNum())
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
