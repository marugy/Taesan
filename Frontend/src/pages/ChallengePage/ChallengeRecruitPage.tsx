import React from 'react';
import { useNavigate } from 'react-router-dom';

import ChallengeMemberList from 'components/ChallengeRecruit/ChallengeMemberList';
import { Button } from '@material-tailwind/react';

const ChallengeRecruitPage = () => {
  const navigate = useNavigate();
  // 방 정보 불러오기
  console.log('GET_챌린지 모집정보');
  // 방 멤버 리스트 불러오기
  console.log('GET_챌린지 모집멤버 정보');

  // 챌린지 시작하기
  const handlePlay = () => {
    console.log('POST_챌린지 모집정보');
    console.log('방 이동');
    navigate('/challenge/play');
  };
  // 챌린지 나가기
  const handleExit = () => {
    console.log('DELETE_유저 IN 챌린지');
  };
  return (
    <div>
      <div>챌린지 모집중</div>
      <div>제목 : 메롱</div>
      <div>기간 : 12일</div>
      <div>목표소비금액 : ￦100,000원</div>
      <br />
      <div>
        <div>CODE : A2C2E2</div>
        <ChallengeMemberList />
      </div>
      <br />
      <div>
        <Button onClick={handlePlay}>시작하기</Button>
        <Button onClick={handleExit}>나가기</Button>
      </div>
    </div>
  );
};

export default ChallengeRecruitPage;
