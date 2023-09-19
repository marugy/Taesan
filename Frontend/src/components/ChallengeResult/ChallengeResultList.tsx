import React from 'react';

import ChallengeResultItem from './ChallengeResultItem';

import { DUMMY } from 'constants/CHALLENGE_RESULT_LIST';

const ChallengeResultList = () => {
  return (
    <div className="space-y-2">
      {DUMMY.map((item, index) => (
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
