package com.ts.taesan.domain.asset.api.dto.inner;

import com.ts.taesan.global.openfeign.bank.dto.inner.AccountList;
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

    @Builder
    public Account(AccountList accountList) {
        this.bank = accountList.getBank();
        this.accountNum = accountList.getAccountNum();
        this.balance = accountList.getBalance();
    }

}
