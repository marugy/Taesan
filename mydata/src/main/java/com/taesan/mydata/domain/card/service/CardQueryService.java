package com.taesan.mydata.domain.card.service;

import com.taesan.mydata.domain.bank.api.dto.inner.AccountDetail;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountInfo;
import com.taesan.mydata.domain.bank.api.dto.inner.AccountList;
import com.taesan.mydata.domain.bank.api.dto.response.AccountDetailResponse;
import com.taesan.mydata.domain.bank.api.dto.response.AccountInfoResponse;
import com.taesan.mydata.domain.bank.api.dto.response.AccountListResponse;
import com.taesan.mydata.domain.bank.repository.AccountQueryRepository;
import com.taesan.mydata.domain.card.api.dto.inner.CardList;
import com.taesan.mydata.domain.card.api.dto.response.CardInfoResponse;
import com.taesan.mydata.domain.card.api.dto.response.CardListResponse;
import com.taesan.mydata.domain.card.repository.CardQueryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CardQueryService {

    private final CardQueryRepository cardQueryRepository;

    public CardListResponse findCardList(long memberCi, long cursor, int limit) {

        List<CardList> cardList = cardQueryRepository.findCardListByCardId(memberCi, cursor, limit);

        return CardListResponse.builder()
                .cardList(cardList)
                .regDate("20170203")
                .nextPage(cursor + limit + 1)
                .build();
    }

    public CardInfoResponse findCardInfo(long cardId) {
        return cardQueryRepository.findCardInfoById(cardId);
    }

}
