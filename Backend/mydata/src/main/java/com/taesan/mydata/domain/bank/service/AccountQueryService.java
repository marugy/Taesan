package com.taesan.mydata.domain.bank.service;

import com.taesan.mydata.domain.bank.repository.AccountQueryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountQueryService {

    private final AccountQueryRepository accountQueryRepository;

}
