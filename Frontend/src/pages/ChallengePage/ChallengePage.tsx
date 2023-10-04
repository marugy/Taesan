import React from 'react';
import ChallengeButtonList from 'components/Challenge/ChallengeButtonList';
import ChallengeSaving from 'components/Challenge/ChallengeSaving';
import BottomNav from 'components/Common/BottomNav';
import ArrowBackParam from 'components/Common/ArrowBackParam';
const ChallengePage = () => {
  return (
    <div className="h-full overflow-hidden">
      <ArrowBackParam pageName="절약 챌린지" param="/main" />
      <div className="flex flex-col items-center h-[90%] justify-center">
        <ChallengeSaving />
        <ChallengeButtonList />
        <div className="h-[120px]"></div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ChallengePage;
