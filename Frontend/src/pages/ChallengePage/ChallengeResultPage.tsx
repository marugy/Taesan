import React from 'react';

import ChallengeResultList from 'components/ChallengeResult/ChallengeResultList';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import ArrowBackParam from 'components/Common/ArrowBackParam';
const ChallengeResultPage = () => {
  console.log('GET_이전 챌린지 리스트');
  return (
    <div className="h-screen">
      <ArrowBackParam pageName="이전 챌린지 목록" param="/challenge" />
      <div className="flex flex-col items-center">
        <ChallengeResultList />
      </div>
      <BottomNav />
    </div>
  );
};

export default ChallengeResultPage;
