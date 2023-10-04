import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';

const SavingListCategory = () => {
  const { accessToken, refreshToken } = useUserStore();
  const [catergory, setCategory] = useState({ challenge: 0, habit: 0, ifbuy: 0, total: 0 });

  useEffect(() => {
    axios
      .get(`https://j9c211.p.ssafy.io/api/asset-management/tikkle/category`, {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((res) => {
        console.log(res.data.response);
        setCategory(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col space-y-20">
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>샀다 치고</div>
          <div>{catergory.ifbuy}</div>
        </div>
        <div className="flex justify-between">
          <div>습관 저금통</div>
          <div>{catergory.habit}</div>
        </div>
        <div className="flex justify-between">
          <div>절약 챌린지</div>
          <div>{catergory.challenge}</div>
        </div>
        <div className="flex justify-between">
          <div>총 액</div>
          <div>{catergory.total}</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div>현재 이자</div>
          <div>$interest</div>
        </div>
      </div>
    </div>
  );
};

export default SavingListCategory;
