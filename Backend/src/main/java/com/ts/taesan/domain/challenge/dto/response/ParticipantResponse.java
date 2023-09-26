package com.ts.taesan.domain.challenge.dto.response;

import com.ts.taesan.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class ParticipantResponse {
    private String name;
    private Long spare;
}
