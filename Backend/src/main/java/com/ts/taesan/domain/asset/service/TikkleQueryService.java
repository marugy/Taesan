package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.asset.api.dto.response.TikkleInfoResponse;
import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.global.util.InterestCalculateUtil;
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
    private final InterestCalculateUtil calculateUtil;

    public TikkleInfoResponse getMyTikkleInfo(Long memberId) {
        Tikkle tikkle = tikkleRepository.findByMemberId(memberId).get();
        return TikkleInfoResponse.builder()
                .curMoney(tikkle.getMoney())
                .futureMoney(calculateUtil.calculate(tikkle))
                .endDate(tikkle.getEndDate())
                .build();
    }

}
