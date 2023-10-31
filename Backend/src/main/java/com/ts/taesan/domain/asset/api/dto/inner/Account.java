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
    private String accountName;
    private Long balance;

    @Builder
    public Account(String bank, String accountNum, String accountName, Long balance) {
        this.bank = bank;
        this.accountNum = accountNum;
        this.accountName = accountName;
        this.balance = balance;
    }

    @Builder
    public Account(AccountList accountList) {
        this.bank = accountList.getBank();
        this.accountNum = accountList.getAccountNum();
        this.accountName = accountList.getProdName();
        this.balance = accountList.getBalance();
    }

}
