package com.ts.taesan.domain.asset.repository;

import com.ts.taesan.domain.asset.entity.Tikkle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TikkleRepository extends JpaRepository<Tikkle, Long> {


}
