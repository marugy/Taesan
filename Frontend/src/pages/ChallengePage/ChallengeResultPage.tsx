import React from 'react';

import ChallengeResultList from 'components/ChallengeResult/ChallengeResultList';
import ArrowBack from 'components/Common/ArrowBack';

const ChallengeResultPage = () => {
  console.log('GET_이전 챌린지 리스트');
  return (
    <div>
      <ArrowBack pageName="이전 챌린지 목록" />
      <div className="flex flex-col items-center my-20">
        <ChallengeResultList />
      </div>
    </div>
  );
};

export default ChallengeResultPage;
