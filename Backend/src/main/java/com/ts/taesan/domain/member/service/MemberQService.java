package com.ts.taesan.domain.member.service;

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
        MemberInfoResponse memberInfoResponse = memberQRepository.findById(id);
        if (memberInfoResponse == null) {
            return null;
        }
        return memberInfoResponse;
    }
}
