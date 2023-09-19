import React from 'react';

import ChallengeResultList from 'components/ChallengeResult/ChallengeResultList';

const ChallengeResultPage = () => {
  console.log('GET_이전 챌린지 리스트');
  return (
    <div className="flex flex-col items-center my-20">
      <ChallengeResultList />
    </div>
  );
};

export default ChallengeResultPage;
