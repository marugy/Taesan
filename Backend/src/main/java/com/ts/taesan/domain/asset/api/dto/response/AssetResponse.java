package com.ts.taesan.domain.asset.api.dto.response;

import com.ts.taesan.domain.asset.api.dto.inner.Account;
import com.ts.taesan.domain.asset.api.dto.inner.Card;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class AssetResponse {

    private Boolean createdTikkle;
    private Boolean connectedAsset;
    private Account account;
    private List<Card> cardList;


    @Builder
    public AssetResponse(Boolean createdTikkle, Boolean connectedAsset, Account account, List<Card> cardList) {
        this.createdTikkle = createdTikkle;
        this.connectedAsset = connectedAsset;
        this.account = account;
        this.cardList = cardList;
    }
}
