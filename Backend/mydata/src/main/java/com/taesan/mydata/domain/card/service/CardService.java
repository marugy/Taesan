package com.taesan.mydata.domain.card.service;

import com.taesan.mydata.domain.card.api.dto.response.PayResponse;
import com.taesan.mydata.domain.card.entity.Card;
import com.taesan.mydata.domain.card.entity.CardHistory;
import com.taesan.mydata.domain.card.repository.CardHistoryRepository;
import com.taesan.mydata.domain.card.repository.CardRepository;
import com.taesan.mydata.global.enumerate.Shop;
import com.taesan.mydata.global.openfeign.transaction.TransactionClient;
import com.taesan.mydata.global.openfeign.transaction.dto.request.CardHistoryList;
import com.taesan.mydata.global.util.DummyUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@RequiredArgsConstructor
@Slf4j
public class CardService {

    private final CardRepository cardRepository;
    private final CardHistoryRepository cardHistoryRepository;
    private final TransactionClient transactionClient;
    private final DummyUtils dummyUtils;

    public PayResponse pay(Long memberId, Long cardId, String shopName, Long amount, String accessToken) {
        if (!cardRepository.existsByMemberCi(memberId)) {
            throw new RuntimeException("당신의 카드가 아닙니다.");
        }
        Card card = cardRepository.findById(cardId).get();
        CardHistory cardHistory = CardHistory.builder()
                .card(card)
                .approvedNum("12345678")
                .approvedDtime(new Date())
                .status("01")
                .payType(dummyUtils.getType(2))
                .merchantName(shopName)
                .merchantRegno(dummyUtils.getShop().getRegistrationNumber())
                .approvedAmt(amount)
                .build();
        cardHistoryRepository.save(cardHistory);
        transactionClient.saveNewTransaction(accessToken, cardId, new CardHistoryList(cardHistory));

        return PayResponse.builder()
                .rspCode("200")
                .rspMsg("성공")
                .approvedDtime(cardHistory.getApprovedDtime())
                .approvedNum(cardHistory.getApprovedNum())
                .build();
    }

}
