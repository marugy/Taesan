import React from 'react';
import ChallengeButtonList from 'components/Challenge/ChallengeButtonList';
import ChallengeSaving from 'components/Challenge/ChallengeSaving';
import ArrowBack from 'components/Common/ArrowBack';

const ChallengePage = () => {
  // 유저 챌린지 상태를 불러오기 API
  console.log('GET_사용자의 챌린지 상태');
  // 챌린지 상태에 따라 버튼 보여주기 생성+같이/모집/진행

  return (
    <div>
      <ArrowBack pageName="절약 챌린지" />
      <div className="flex flex-col items-center">
        <ChallengeSaving />
        <ChallengeButtonList />
      </div>
    </div>
  );
};

export default ChallengePage;
