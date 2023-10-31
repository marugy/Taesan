package com.taesan.mydata.domain.card.repository;

import com.taesan.mydata.domain.card.entity.Card;
import com.taesan.mydata.domain.card.entity.CardHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardHistoryRepository extends JpaRepository<CardHistory, Long> {
    
}
