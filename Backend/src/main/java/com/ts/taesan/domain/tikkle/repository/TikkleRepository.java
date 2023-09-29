package com.ts.taesan.domain.tikkle.repository;

import com.ts.taesan.domain.tikkle.entity.Tikkle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TikkleRepository extends JpaRepository<Tikkle, Long> {


}
