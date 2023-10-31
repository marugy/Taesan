package com.ts.taesan.domain.asset.api.dto.response;

import com.ts.taesan.domain.asset.api.dto.inner.CardHistoryList;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class CardHistoryListResponse {

    private List<CardHistoryList> transactionList;

}
