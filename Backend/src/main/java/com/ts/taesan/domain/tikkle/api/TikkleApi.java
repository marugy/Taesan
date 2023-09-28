package com.ts.taesan.domain.tikkle.api;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.tikkle.api.dto.response.Account;
import com.ts.taesan.domain.tikkle.api.dto.response.AssetResponse;
import com.ts.taesan.domain.tikkle.api.dto.response.Card;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountDetail;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountInfo;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountList;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountDetailRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountInfoRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.api.ApiResponse;
import com.ts.taesan.global.openfeign.card.CardClient;
import com.ts.taesan.global.openfeign.card.dto.inner.CardList;
import com.ts.taesan.global.openfeign.card.dto.request.CardListRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import static com.ts.taesan.global.api.ApiResponse.OK;

@RestController
@RequestMapping("/api/asset-management/assets")
@RequiredArgsConstructor
@Slf4j
public class TikkleApi {

    private final BankClient bankClient;
    private final CardClient cardClient;
    private final MemberRepository memberRepository;

    @GetMapping("/saving")
    public ApiResponse<Integer> getSavingInfo() {
        return OK(30000);
    }

    @GetMapping
    public AssetResponse getMyAssets(
            @AuthenticationPrincipal User user
    ) {
        log.warn("{}", user.getUsername());
        long userId = Long.parseLong(user.getUsername());
        Member member = memberRepository.findById(userId).get();
        String tranId = "1234567890M00000000000001";
        String apiType = "user-search";

        AccountInfoRequest accountInfoRequest = AccountInfoRequest.builder()
                .org_code("ssafy00001")
                .account_num(member.getAccountNum())
                .seqno(1)
                .search_timestamp(new Date().getTime())
                .next_page(0L)
                .limit(500)
                .build();

        AccountDetailRequest accountDetailRequest = AccountDetailRequest.builder()
                .org_code("ssafy00001")
                .account_num(member.getAccountNum())
                .seqno(1)
                .search_timestamp(new Date().getTime())
                .build();

//        AccountListRequest request = AccountListRequest.builder()
//                .org_code("ssafy00001")
//                .search_timestamp(1265275107687L)
//                .next_page(0)
//                .limit(500)
//                .build();

//        List<AccountList> accountList = bankClient.getAccountList(Long.parseLong(user.getUsername()), tranId, apiType, request).getBody().getAccountList();
        AccountInfo accountInfo = bankClient.getAccountInfo(tranId, apiType, accountInfoRequest).getBody().getBasicList().get(0);
        AccountDetail accountDetail = bankClient.getAccountDetail(tranId, apiType, accountDetailRequest).getBody().getDetailList().get(0);
        Account account = Account.builder()
                .bank(accountInfo.getBank())
                .accountNum(member.getAccountNum())
                .balance((long) accountDetail.getBalanceAmt())
                .build();

        CardListRequest cardListRequest = CardListRequest.builder()
                .org_code("ssafy00001")
                .search_timestamp(new Date().getTime())
                .next_page(0L)
                .limit(500)
                .build();

        List<CardList> cardList = cardClient.getCardList(userId, tranId, apiType, cardListRequest).getBody().getCardList();
        List<Card> retCardList = cardList.stream().map(Card::new).collect(Collectors.toList());

        return AssetResponse.builder()
                .connectedAsset(true)
                .createdTikkle(true)
                .account(account)
                .cardList(retCardList)
                .build();

    }

}
