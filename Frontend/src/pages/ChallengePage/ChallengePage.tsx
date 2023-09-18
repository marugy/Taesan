import React from 'react';
import ChallengeButtonList from 'components/Challenge/ChallengeButtonList';
import ChallengeSaving from 'components/Challenge/ChallengeSaving';

const ChallengePage = () => {
  // 유저 챌린지 상태를 불러오기 API
  console.log('GET_사용자의 챌린지 상태');
  // 챌린지 상태에 따라 버튼 보여주기 생성+같이/모집/진행

  return (
    <div>
      <ChallengeSaving />
      <ChallengeButtonList />
    </div>
  );
};

export default ChallengePage;
