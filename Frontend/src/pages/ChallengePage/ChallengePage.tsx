import React from 'react';
import ChallengeButtonList from 'components/Challenge/ChallengeButtonList';
import ChallengeSaving from 'components/Challenge/ChallengeSaving';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
const ChallengePage = () => {
  return (
    <div className="h-full">
      <ArrowBack pageName="절약 챌린지" />
      <div className="flex flex-col items-center">
        <ChallengeSaving />
        <ChallengeButtonList />
      </div>
      <div className="h-[80px]" />
    </div>
  );
};

export default ChallengePage;
