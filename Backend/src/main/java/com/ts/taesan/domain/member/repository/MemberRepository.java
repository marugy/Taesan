package com.ts.taesan.domain.member.repository;

import com.ts.taesan.domain.member.dto.response.MemberInfoResponse;
import com.ts.taesan.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findById(Long id);

    Optional<Member> findByLoginId(String loginId);

    Optional<Member> findMemberByLoginIdAndPassword(String memberId, String password);

    Optional<Member> findMemberByIdAndSimplePassword(Long memberId, String simplePassword);
}