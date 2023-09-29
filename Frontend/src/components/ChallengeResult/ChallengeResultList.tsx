import React from 'react';

import ChallengeResultItem from './ChallengeResultItem';

import { CHALLENGE_RESULT_LIST } from 'constants/DUMMY';

const ChallengeResultList = () => {
  return (
    <div className="space-y-2">
      {CHALLENGE_RESULT_LIST.map((item, index) => (
        <ChallengeResultItem
          key={index}
          title={item.title}
          challengeMoney={item.challengeMoney}
          saveMoney={item.saveMoney}
          duration={item.duration}
          isSave={item.isSave}
        />
      ))}
    </div>
  );
};

export default ChallengeResultList;
