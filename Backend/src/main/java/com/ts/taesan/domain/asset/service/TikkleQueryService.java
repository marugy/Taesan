package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.asset.api.dto.response.TikkleInfoResponse;
import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TikkleQueryService {

    private final TikkleRepository tikkleRepository;

    public TikkleInfoResponse getMyTikkleInfo(Long memberId) {
        Tikkle tikkle = tikkleRepository.findByMemberId(memberId).get();
        return TikkleInfoResponse.builder()
                .curMoney(tikkle.getMoney())
                .futureMoney(tikkle.getMoney()+1000)     // 얘는 나중에 계산로직 추가 필요
                .endDate(tikkle.getEndDate())
                .build();
    }

}
