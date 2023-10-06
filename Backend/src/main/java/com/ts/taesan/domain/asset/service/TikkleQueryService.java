package com.ts.taesan.domain.asset.service;

import com.ts.taesan.domain.asset.api.dto.response.CategoryMoneyResponse;
import com.ts.taesan.domain.asset.api.dto.response.PayHistoryResponse;
import com.ts.taesan.domain.asset.api.dto.response.TikkleCategoryResponse;
import com.ts.taesan.domain.asset.api.dto.response.TikkleInfoResponse;
import com.ts.taesan.domain.asset.entity.Tikkle;
import com.ts.taesan.domain.asset.repository.PayHistoryQRepository;
import com.ts.taesan.domain.asset.repository.TikkleRepository;
import com.ts.taesan.global.util.InterestCalculateUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TikkleQueryService {

    private final TikkleRepository tikkleRepository;
    private final PayHistoryQRepository payHistoryQRepository;
    private final InterestCalculateUtil calculateUtil;

    public TikkleInfoResponse getMyTikkleInfo(Long memberId) {
        Tikkle tikkle = tikkleRepository.findByMemberId(memberId).get();
        return TikkleInfoResponse.builder()
                .curMoney(tikkle.getMoney())
                .futureMoney(calculateUtil.calculate(tikkle))
                .endDate(tikkle.getEndDate())
                .build();
    }

    public List<PayHistoryResponse> getPayHistories(Long memberId) {
        List<PayHistoryResponse> payHistoryResponses = payHistoryQRepository.getPayHistories(memberId);
        return payHistoryResponses;
    }

    public TikkleCategoryResponse getCategory(Long memberId) {
        List<CategoryMoneyResponse> categoryMoneyResponse = payHistoryQRepository.getCategoryMoney(memberId);
        Tikkle tikkle = tikkleRepository.findByMemberId(memberId).orElseThrow();

        TikkleCategoryResponse tikkleCategoryResponse = new TikkleCategoryResponse();
        for (int i = 0; i < categoryMoneyResponse.size(); i++) {
            int category = categoryMoneyResponse.get(i).getCategory();
            Long totalMoney = categoryMoneyResponse.get(i).getTotalMoney();
            if (category == 1) {
                tikkleCategoryResponse.setIfbuy(totalMoney);
            } else if (category == 2) {
                tikkleCategoryResponse.setHabit(totalMoney);
            } else if (category == 3) {
                tikkleCategoryResponse.setChallenge(totalMoney);
            }
        }
        tikkleCategoryResponse.setTotal(tikkle.getMoney());
        return tikkleCategoryResponse;
    }
}
