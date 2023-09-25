package com.ts.taesan.domain.transaction.repository;

import com.ts.taesan.domain.transaction.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    Transaction getTransactionById(Long id);
}
