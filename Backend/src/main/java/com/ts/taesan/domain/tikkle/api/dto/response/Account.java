package com.ts.taesan.domain.tikkle.api.dto.response;

import com.ts.taesan.domain.member.entity.Address;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class Account {

    private String bank;
    private String accountNum;
    private Long balance;

    @Builder
    public Account(String bank, String accountNum, Long balance) {
        this.bank = bank;
        this.accountNum = accountNum;
        this.balance = balance;
    }

}
