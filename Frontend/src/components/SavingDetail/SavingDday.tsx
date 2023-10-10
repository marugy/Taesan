import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useUserStore } from 'store/UserStore';
import dayjs from 'dayjs';

const SavingDday = () => {
  const [savingInfo, setSavingInfo] = useState({
    curMoney: 0,
    endDate: '',
    futureMoney: 0,
  });

  const { accessToken, refreshToken } = useUserStore();
  // 쿼리 1
  const getSavingInfo = async () => {
    const { data: savingTikkleInfo } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/tikkle/', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    setSavingInfo(savingTikkleInfo.response);
    // console.log(userProfileInfo);
    // setName(userProfileInfo.response.name);
    return savingTikkleInfo;
  };
  const query = useQuery('getSavingInfo', getSavingInfo);
  const today = dayjs(); // 오늘 날짜
  const expirationDate = dayjs(savingInfo.endDate).diff(today, 'day') + 1; // 오늘과 만기일 사이의 날짜 차이

  return (
    <div className="border-2 rounded-xl mx-5 bg-white flex items-center justify-between mt-8">
      <img src="/piggy_bank.png" alt="pig" className="h-24" />
      <div className="font-bold text-sm dt:text-lg flex flex-col justify-center items-center gap-5 p-1">
        <div> {savingInfo?.curMoney?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '0'} 원</div>
        <div>만기까지 {expirationDate}일</div>
        <div>
          현재 해지시 출금액 {savingInfo?.futureMoney?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '0'}원
        </div>
      </div>
    </div>
  );
};

export default SavingDday;
