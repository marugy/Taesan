package com.ts.taesan.domain.asset.api.dto.response;

import com.ts.taesan.domain.asset.api.dto.inner.Account;
import com.ts.taesan.domain.asset.api.dto.inner.Card;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class TikkleInfoResponse {

    private Long curMoney;
    private Date endDate;
    private Long futureMoney;

    @Builder
    public TikkleInfoResponse(Long curMoney, Date endDate, Long futureMoney) {
        this.curMoney = curMoney;
        this.endDate = endDate;
        this.futureMoney = futureMoney;
    }
}
