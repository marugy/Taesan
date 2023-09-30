package com.taesan.mydata.domain.card.service;

import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import com.taesan.mydata.domain.card.api.dto.inner.CardTransactionList;
import com.taesan.mydata.domain.card.api.dto.response.CardInfoResponse;
import com.taesan.mydata.domain.card.api.dto.response.CardListResponse;
import com.taesan.mydata.domain.card.api.dto.response.CardTransactionListResponse;
import com.taesan.mydata.domain.card.repository.CardHistoryQueryRepository;
import com.taesan.mydata.domain.card.repository.CardQueryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CardHistoryQueryService {

    private final CardHistoryQueryRepository cardHistoryQueryRepository;

    public CardTransactionListResponse findCardHistory(long cardId, Long cursor, int limit) {
        List<CardTransactionList> cardList = cardHistoryQueryRepository.findCardTransactionList(cardId, cursor, limit);
//        if (cursor == null) {
//            cursor = cardHistoryQueryRepository.count(cardId);
//        }
        return CardTransactionListResponse.builder()
                .nextPage(cardList.size()==limit+1 ? cardList.get(cardList.size()-1).getId() : null)
                .approvedList(cardList.subList(0, cardList.size()-1))
                .build();
    }

}
