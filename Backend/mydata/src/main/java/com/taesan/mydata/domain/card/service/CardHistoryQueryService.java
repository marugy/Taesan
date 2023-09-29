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

    public CardTransactionListResponse findCardHistory(long cardId, long cursor, int limit) {
        List<CardTransactionList> cardList = cardHistoryQueryRepository.findCardTransactionList(cardId, cursor, limit);

        return CardTransactionListResponse.builder()
                .nextPage(cursor + limit)
                .approvedList(cardList)
                .build();
    }

}
