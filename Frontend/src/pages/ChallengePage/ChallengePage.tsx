import React from 'react';
import ChallengeButtonList from 'components/Challenge/ChallengeButtonList';
import ChallengeSaving from 'components/Challenge/ChallengeSaving';
import BottomNav from 'components/Common/BottomNav';
import ArrowBackParam from 'components/Common/ArrowBackParam';
const ChallengePage = () => {
  return (
    <div className="h-full">
      <ArrowBackParam pageName="절약 챌린지" param="/main" />
      <div className="flex flex-col items-center">
        <ChallengeSaving />
        <ChallengeButtonList />
      </div>
      <div className="h-[80px]" />
    </div>
  );
};

export default ChallengePage;
