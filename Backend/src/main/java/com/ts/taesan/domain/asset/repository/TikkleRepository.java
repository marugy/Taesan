package com.ts.taesan.domain.asset.repository;

import com.ts.taesan.domain.asset.entity.Tikkle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TikkleRepository extends JpaRepository<Tikkle, Long> {

    Optional<Tikkle> findByMemberId(Long memberId);

}
