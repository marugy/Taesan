package com.ts.taesan.domain.challenge.repository;

import com.ts.taesan.domain.challenge.entity.ChallengeParticipant;
import com.ts.taesan.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChallengeParticipantRepository extends JpaRepository<ChallengeParticipant, Long> {

    Optional<ChallengeParticipant> findByMemberIdAndChallengeId(Long memberId, Long challengeId);

    void deleteAllByChallengeId(Long challengeId);

    boolean existsByMemberId(Long memberId);
}
