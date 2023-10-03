package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.global.openfeign.auth.AuthClient;
import com.ts.taesan.global.openfeign.auth.dto.request.TokenRequest;
import com.ts.taesan.global.openfeign.bank.BankAccessUtil;
import com.ts.taesan.global.openfeign.bank.BankClient;
import com.ts.taesan.global.openfeign.bank.dto.request.TransferRequest;
import com.ts.taesan.global.util.InterestCalculateUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TikkleService {

    private final TikkleRepository tikkleRepository;
    private final MemberRepository memberRepository;
    private final BankAccessUtil bankAccessUtil;

    public void save(Long memberId, Date endDate) {
        Member member = memberRepository.findById(memberId).get();
        Tikkle tikkle = Tikkle.builder()
                .member(member)
                .money(0L)
                .endDate(endDate)
                .build();
        tikkleRepository.save(tikkle);
    }

    public void delete(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        Tikkle tikkle = tikkleRepository.findByMemberId(memberId).get();
        bankAccessUtil.transfer(member);
        tikkleRepository.delete(tikkle);
    }

}
