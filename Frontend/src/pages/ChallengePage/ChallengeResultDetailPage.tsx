import React from 'react';
import BottomNav from 'components/Common/BottomNav';
import ChallengeMemberList from 'components/ChallengeResultDetail/ChallengeMemberList';
import ArrowBack from 'components/Common/ArrowBack';

const ChallengeResultDetailPage = () => {
  console.log('GET_이전 챌린지 상세');
  return (
    <div className='h-screen'>
      <ArrowBack pageName="이전 챌린지" />
      <div className="flex flex-col items-center">
        <div className="m-5 flex flex-col justify-center items-center tb:text-md dt:text-xl font-bold">
          <div className="mb-5">일주일동안 열심히 모아봐요</div>
          <div>절약 기간</div>
          <div className="mb-2 font">2023.08.29 ~ 2023.09.05</div>
          <div>목표소비금액</div>
          <div className="mb-2">￦ 100,000</div>
          <div>내가 아낀 금액</div>
          <div>￦ 30,000</div>
        </div>
        <ChallengeMemberList />
      </div>
      <BottomNav/>
    </div>
  );
};

export default ChallengeResultDetailPage;
