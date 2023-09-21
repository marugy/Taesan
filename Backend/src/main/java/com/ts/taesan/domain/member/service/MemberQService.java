package com.ts.taesan.domain.member.service;

import com.ts.taesan.domain.member.dto.request.MemberLoginRequest;
import com.ts.taesan.domain.member.dto.request.SimpleLoginRequest;
import com.ts.taesan.domain.member.dto.response.MemberInfoResponse;
import com.ts.taesan.domain.member.repository.MemberQRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class MemberQService {

    private final MemberQRepository memberQRepository;

    public MemberInfoResponse findById(Long id) {
        MemberInfoResponse memberInfoResponse = memberQRepository.findMemberById(id);
        if (memberInfoResponse == null) {
            return null;
        }
        return memberInfoResponse;
    }

    public MemberInfoResponse login(MemberLoginRequest memberLoginRequest) {
        String loginId = memberLoginRequest.getLoginId();
        String password = memberLoginRequest.getPassword();
        MemberInfoResponse memberInfoResponse = memberQRepository.findMemberByLoginIdAndPassword(loginId, password);
        return memberInfoResponse;
    }

    public MemberInfoResponse simpleLogin(Long userId, SimpleLoginRequest simpleLoginRequest) {
        String simplePassword = simpleLoginRequest.getSimplePassword();
        MemberInfoResponse memberInfoResponse = memberQRepository.findMemberBySimplePassword(userId, simplePassword);
        return memberInfoResponse;
    }
}
