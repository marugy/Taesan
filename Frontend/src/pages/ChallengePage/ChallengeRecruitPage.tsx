import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChallengeMemberList from 'components/ChallengeRecruit/ChallengeMemberList';
import RoomCode from 'components/ChallengeRecruit/RoomCode';
import { Button } from '@material-tailwind/react';

const ChallengeRecruitPage = () => {
  const [roomcode, setRoomcode] = useState('ABCDEF');
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
    <div className="flex flex-col items-center">
      <div className="m-5">
        <div className="mr-14 tb:mr-14 dt:mr-32 mb-10 tb:text-md dt:text-xl font-bold">일주일동안 열심히 모아봐요</div>
        <div className="mr-14 tb:mr-14 dt:mr-32 mb-2 tb:text-md dt:text-xl font-bold">
          절약 기간 <br /> 12일
        </div>
        <div className="mr-14 tb:mr-14 dt:mr-32 tb:text-md dt:text-xl font-bold">
          목표소비금액 <br /> ￦100,000원
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#E3E9ED] w-[400px] dt:w-[500px] rounded-xl mb-5">
        <RoomCode roomcode={roomcode} />
        <ChallengeMemberList />
        <div className="mb-5 space-x-5">
          <Button className="bg-main tb:text-md dt:text-xl" onClick={handlePlay}>
            시작하기
          </Button>
          <Button className="bg-main tb:text-md dt:text-xl" onClick={handleExit}>
            나가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeRecruitPage;
