package com.ts.taesan.domain.member.service;

import com.ts.taesan.domain.member.dto.request.MemberJoinRequest;
import com.ts.taesan.domain.member.dto.request.MemberModifyRequest;
import com.ts.taesan.domain.member.dto.request.SimpleLoginRequest;
import com.ts.taesan.domain.member.dto.response.TokenResponse;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.repository.MemberRepository;
import com.ts.taesan.domain.member.token.JwtTokenProvider;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;

    public Member findById(Long id) {
        return memberRepository.findById(id).orElseThrow(() -> new EntityNotFoundException());
    }

    public void save(MemberJoinRequest memberJoinRequest) {
        Member member = memberJoinRequest.toEntity();
        memberRepository.save(member);
    }

    public TokenResponse login(String loginId, String password) throws IOException {

        Member member = memberRepository.findMemberByLoginIdAndPassword(loginId, password).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));

        //둘 다 새로 발급
        String accessToken = jwtTokenProvider.createAccessToken(member.getId());
        String refreshToken = jwtTokenProvider.createRefreshToken(member.getId());
        member.updateRefreshToken(refreshToken);   //DB Refresh 토큰 갱신
        return TokenResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .userId(member.getId())
                .build();
    }

    public TokenResponse simpleLogin(Long memberId, SimpleLoginRequest simpleLoginRequest) {
        // TODO: 2023-09-25 RT에서 유저 정보 추출 및 expiredate 체크
        String simplePassword = simpleLoginRequest.getSimplePassword();
        Member member = memberRepository.findMemberByIdAndSimplePassword(memberId, simplePassword).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));

        String accessToken = "";
        String refreshToken = member.getRefreshToken();

        //refresh 토큰은 유효 할 경우
        if (jwtTokenProvider.isValidRefreshToken(refreshToken)) {
            accessToken = jwtTokenProvider.createAccessToken(member.getId()); //Access Token 새로 만들어서 줌
            return TokenResponse.builder()
                    .accessToken(accessToken)
                    .refreshToken(refreshToken)
                    .build();
        } else {
            //둘 다 새로 발급
            accessToken = jwtTokenProvider.createAccessToken(member.getId());
            refreshToken = jwtTokenProvider.createRefreshToken(member.getId());
            member.updateRefreshToken(refreshToken);   //DB Refresh 토큰 갱신
        }

        return TokenResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    public TokenResponse issueAccessToken(HttpServletRequest request) throws IllegalAccessException {
        String accessToken = jwtTokenProvider.resolveAccessToken(request);
        String refreshToken = jwtTokenProvider.resolveRefreshToken(request);
        System.out.println("accessToken = " + accessToken);
        System.out.println("refreshToken = " + refreshToken);
        //accessToken이 만료됐고 refreshToken이 맞으면 accessToken을 새로 발급(refreshToken의 내용을 통해서)
        if (!jwtTokenProvider.isValidAccessToken(accessToken)) {  //클라이언트에서 토큰 재발급 api로의 요청을 확정해주면 이 조건문은 필요없다.
            System.out.println("Access 토큰 만료됨");
            if (jwtTokenProvider.isValidRefreshToken(refreshToken)) {     //들어온 Refresh 토큰이 유효한지
                System.out.println("Refresh 토큰은 유효함");
                Claims claimsToken = jwtTokenProvider.getClaimsToken(refreshToken);
                Long userId = (long) (int) claimsToken.get("userId");
                String tokenFromDB = memberRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다.")).getRefreshToken();
                System.out.println("tokenFromDB = " + tokenFromDB);
                if (refreshToken.equals(tokenFromDB)) {   //DB의 refresh토큰과 지금들어온 토큰이 같은지 확인
                    System.out.println("Access 토큰 재발급 완료");
                    accessToken = jwtTokenProvider.createAccessToken(userId);
                } else {
                    //DB의 Refresh토큰과 들어온 Refresh토큰이 다르면 중간에 변조된 것임
                    System.out.println("Refresh Token 탈취당했어 너 클났어");
                    //예외발생
                    throw new IllegalAccessException("잘못된 접근입니다.");
                }
            } else {
                //입력으로 들어온 Refresh 토큰이 유효하지 않음
                System.out.println("refresh token 유효하지 않아!");
            }
        }
        return TokenResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    public void logout(Long memberId) {
        Member member = memberRepository.findById(memberId).get();
        member.deleteRefreshToken();
    }

    public boolean checkId(String loginId) {
        Member member = memberRepository.findByLoginId(loginId).orElse(null);
        if (member == null) {
            return true;
        } else {
            return false;
        }
    }

    public void modify(Long id, MemberModifyRequest memberModifyRequest) {
        Member findMember = memberRepository.findById(id).get();
        findMember.update(memberModifyRequest);
    }

    public void modifyPassword(Long id, String password) {
        Member findMember = memberRepository.findById(id).get();
        findMember.updatePassword(password);
    }

    public void modifySimplePassword(Long id, String simplePassword) {
        Member findMember = memberRepository.findById(id).get();
        findMember.updateSimplePassword(simplePassword);
    }

    public void deleteMember(Long id) {
        Member findMember = memberRepository.findById(id).get();
        memberRepository.delete(findMember);
    }

    public Boolean checkPassword(Long memberId, String password) {
        Member member = memberRepository.findById(memberId).orElseThrow();
        if (member.getPassword().equals(password)) {
            return true;
        } else return false;
    }

    public Boolean checkSImplePassword(Long memberId, String simplePassword) {
        Member member = memberRepository.findById(memberId).orElseThrow();
        if (member.getSimplePassword().equals(simplePassword)) {
            return true;
        } else return false;
    }

    public void addAccount(Long memberId, String account) {
        Member member = memberRepository.findById(memberId).orElseThrow();
        member.addAccount(account);
    }
}
