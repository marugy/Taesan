package com.ts.taesan.domain.challenge.repository;

import com.ts.taesan.domain.challenge.entity.Challenge;
import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    @Override
    Optional<Challenge> findById(Long challengeId);

    Optional<Challenge> findChallengeByUuid(String uuid);
}
