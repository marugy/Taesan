package com.ts.taesan.domain.member.service;

import com.ts.taesan.domain.member.dto.request.MemberLoginRequest;
import com.ts.taesan.domain.member.dto.request.SimpleLoginRequest;
import com.ts.taesan.domain.member.dto.response.MemberInfoResponse;
import com.ts.taesan.domain.member.repository.MemberQRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

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

}
