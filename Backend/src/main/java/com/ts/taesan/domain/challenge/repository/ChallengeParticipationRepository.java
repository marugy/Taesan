package com.ts.taesan.domain.challenge.repository;

import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChallengeParticipationRepository extends JpaRepository<ChallengeParticipant, Long> {
}
