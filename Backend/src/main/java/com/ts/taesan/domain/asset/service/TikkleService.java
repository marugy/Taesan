package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.global.openfeign.auth.AuthClient;
import com.ts.taesan.global.openfeign.auth.dto.request.TokenRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TikkleService {

    private final AuthClient authClient;
    private final TikkleRepository tikkleRepository;
    private final MemberRepository memberRepository;

    @Value("${org-code}")
    private String orgCode;

    public void save(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        Tikkle tikkle = Tikkle.builder()
                .member(member)
                .money(0L)
                .build();
        tikkleRepository.save(tikkle);
    }

}
