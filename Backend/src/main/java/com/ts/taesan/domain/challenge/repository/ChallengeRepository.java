package com.ts.taesan.domain.challenge.repository;

import com.ts.taesan.domain.challenge.entity.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    @Override
    Optional<Challenge> findById(Long challengeId);
}
