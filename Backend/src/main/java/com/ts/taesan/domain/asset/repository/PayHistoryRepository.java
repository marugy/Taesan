package com.ts.taesan.domain.asset.repository;

import com.ts.taesan.domain.asset.entity.PayHistory;
import com.ts.taesan.domain.asset.entity.Tikkle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PayHistoryRepository extends JpaRepository<PayHistory, Long> {

    List<PayHistory> findPayHistoriesByTikkleId(Long tikkleId);

}
