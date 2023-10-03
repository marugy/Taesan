import React, { useState } from 'react';
import SavingInfo from 'components/Saving/SavingInfo';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useUserStore } from 'store/UserStore';

const SavingPage = () => {
  const [savingInfo, setSavingInfo] = useState([]);
  const { accessToken, refreshToken } = useUserStore();
  // 쿼리 1
  const getSavingInfo = async () => {
    const { data: savingTikkleInfo } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/tikkle/', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    console.log(savingInfo);
    setSavingInfo(savingTikkleInfo.response);
    console.log(savingTikkleInfo.response)
    // console.log(userProfileInfo);
    // setName(userProfileInfo.response.name);
    return savingTikkleInfo;
  };
  const query = useQuery('getSavingInfo', getSavingInfo);

  return (
    <div>
      <SavingInfo savingInfo={savingInfo} />
    </div>
  );
};

export default SavingPage;
