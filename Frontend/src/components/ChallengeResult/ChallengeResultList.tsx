import React, { useEffect, useState } from 'react';

import ChallengeResultItem from './ChallengeResultItem';

import { CHALLENGE_RESULT_LIST } from 'constants/DUMMY';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';

interface Challenge {
  endDate: string;
  exchange: boolean;
  spare: number;
  id: number;
  price: number;
  startDate: string;
  title: string;
}

const ChallengeResultList = () => {
  const { accessToken, refreshToken } = useUserStore();
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);

  useEffect(() => {
    axios
      .get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/expired`, {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((res) => {
        console.log(res.data.response);
        setChallengeList(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="space-y-2 mt-3 mb-28">
      {challengeList.map((item, index) => (
        <ChallengeResultItem
          endDate={item.endDate}
          exchange={item.exchange}
          spare={item.spare}
          id={item.id}
          price={item.price}
          startDate={item.startDate}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default ChallengeResultList;
