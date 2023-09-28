import React, { useEffect, useState } from 'react';
import BottomNav from 'components/Common/BottomNav';
import ChallengeMemberList from 'components/ChallengeResultDetail/ChallengeMemberList';
import ArrowBackParam from 'components/Common/ArrowBackParam';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useParams } from 'react-router-dom';

const ChallengeResultDetailPage = () => {
  const { accessToken, refreshToken } = useUserStore();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [endDate, setEndDate] = useState('');
  const [players, setPlayers] = useState([]);
  const [price, setPrice] = useState(0);
  const [spare, setSpare] = useState(0);
  const [startDate, setStartDate] = useState('');

  const formatDate = (dateObj: Date) =>
    `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(
      2,
      '0',
    )}`;

  useEffect(() => {
    axios
      .get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/expired/${id}`, {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((res) => {
        const response = res.data.response;
        console.log(response);
        setTitle(response.title);
        setPrice(response.price);
        setSpare(response.spare);
        setPlayers(response.participants);

        const startDateObj = formatDate(new Date(response.startDate));
        const endDateObj = formatDate(new Date(response.endDate));
        setStartDate(startDateObj);
        setEndDate(endDateObj);

        // setChallengeList(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-screen">
      <ArrowBackParam pageName="이전 챌린지" param="/challenge/result" />
      <div className="flex flex-col items-center">
        <div className="m-5 flex flex-col justify-center items-center tb:text-md dt:text-xl font-bold border-2 rounded-lg p-3">
          <div className="mb-5">{title}</div>
          <div>절약 기간</div>
          <div className="mb-2 font">
            {startDate} ~ {endDate}
          </div>
          <div>목표소비금액</div>
          <div className="mb-2">￦ {price}</div>
          <div>내가 아낀 금액</div>
          <div>￦ {spare}</div>
        </div>
        <ChallengeMemberList players={players} price={price} />
      </div>
      <BottomNav />
    </div>
  );
};

export default ChallengeResultDetailPage;
