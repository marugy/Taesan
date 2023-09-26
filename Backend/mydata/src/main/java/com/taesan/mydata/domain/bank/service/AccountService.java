package com.taesan.mydata.domain.bank.service;

import com.taesan.mydata.domain.bank.entity.Account;
import com.taesan.mydata.domain.bank.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AccountService {

    private final AccountRepository accountRepository;

    public void charge(String accNum, int amt) {
        Account account = accountRepository.findByAccountNum(accNum).orElseThrow();
        account.withdraw(amt);
    }

    public void transfer(String accNum, int amt) {
        Account account = accountRepository.findByAccountNum(accNum).orElseThrow();
        account.deposit(amt);
    }

}
