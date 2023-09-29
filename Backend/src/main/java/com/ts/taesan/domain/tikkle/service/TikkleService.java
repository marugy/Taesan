package com.ts.taesan.domain.tikkle.service;

import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.tikkle.entity.Tikkle;
import com.ts.taesan.domain.tikkle.repository.TikkleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TikkleService {

    private final TikkleRepository tikkleRepository;
    private final MemberRepository memberRepository;

    public void save(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        Tikkle tikkle = Tikkle.builder()
                .member(member)
                .money(0L)
                .build();
        tikkleRepository.save(tikkle);
    }

}
