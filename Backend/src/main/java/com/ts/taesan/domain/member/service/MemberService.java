package com.ts.taesan.domain.member.service;

import com.ts.taesan.domain.member.dto.request.MemberJoinRequest;
import com.ts.taesan.domain.member.dto.request.MemberLoginRequest;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberQRepository;
import com.ts.taesan.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class MemberService implements UserDetailsService {

    private final MemberRepository memberRepository;

    public void save(MemberJoinRequest memberJoinRequest) {
        Member member = memberJoinRequest.toEntity();
        memberRepository.save(member);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
