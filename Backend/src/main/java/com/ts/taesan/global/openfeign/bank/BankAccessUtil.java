package com.ts.taesan.global.openfeign.bank;

import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountDetail;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountInfo;
import com.ts.taesan.global.openfeign.bank.dto.inner.AccountList;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountDetailRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountInfoRequest;
import com.ts.taesan.global.openfeign.bank.dto.request.AccountListRequest;
import com.ts.taesan.global.openfeign.bank.dto.response.AccountDetailResponse;
import com.ts.taesan.global.openfeign.bank.dto.response.AccountInfoResponse;
import com.ts.taesan.global.openfeign.bank.dto.response.AccountListResponse;
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
public class BankAccessUtil {

    private final BankClient bankClient;
    private final MemberRepository memberRepository;
    private final TikkleRepository tikkleRepository;

    @Value("${org-code}")
    private String orgCode;

    public List<AccountList> getAccountList(Member member) {
        AccountListResponse accountListResponse = bankClient.getAccountList(
                        member.getMydataAccessToken(),
                        getTranId(),
                        getApiType(),
                        createAccountListRequest())
                .getBody();

        if (accountListResponse == null) {
            throw new RuntimeException("계좌 정보를 찾을 수 없습니다!!");
        }

        return accountListResponse.getAccountList();
    }

    public AccountInfo getAccountInfo(Member member) {
        AccountInfoResponse accountInfoResponse = bankClient.getAccountInfo(
                        member.getMydataAccessToken(),
                        getTranId(),
                        getApiType(),
                        createAccountInfoRequest(member))
                .getBody();

        if (accountInfoResponse == null) {
            throw new RuntimeException("계좌 정보를 찾을 수 없습니다!!");
        }

        return accountInfoResponse.getBasicList().get(0);
    }

    public AccountDetail getAccountDetail(Member member) {
        AccountDetailResponse accountDetailResponse = bankClient.getAccountDetail(
                        member.getMydataAccessToken(),
                        getTranId(),
                        getApiType(),
                        createAccountDetailRequest(member))
                .getBody();

        if (accountDetailResponse == null) {
            throw new RuntimeException("계좌 정보를 찾을 수 없습니다!!");
        }

        return accountDetailResponse.getDetailList().get(0);
    }

    private String getApiType() {
        return "user-search";
    }

    private String getTranId() {
        return "1234567890M00000000000001";
    }

    private AccountListRequest createAccountListRequest() {
        return AccountListRequest.builder()
                .org_code(orgCode)
                .search_timestamp(new Date().getTime())
                .next_page(0)
                .limit(500)
                .build();
    }

    private AccountInfoRequest createAccountInfoRequest(Member member) {
        return AccountInfoRequest.builder()
                .org_code(orgCode)
                .account_num(member.getAccountNum())
                .seqno(1)
                .search_timestamp(new Date().getTime())
                .next_page(0L)
                .limit(500)
                .build();
    }

    private AccountDetailRequest createAccountDetailRequest(Member member) {
        return AccountDetailRequest.builder()
                .org_code(orgCode)
                .account_num(member.getAccountNum())
                .seqno(1)
                .search_timestamp(new Date().getTime())
                .build();
    }

}
