import React, { useState, useEffect } from 'react';
import SavingInfo from 'components/Saving/SavingInfo';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useUserStore } from 'store/UserStore';
import { useNavigate } from 'react-router-dom';

const SavingPage = () => {
  const [savingInfo, setSavingInfo] = useState([]);

  const { accessToken, refreshToken, connectedAsset, createdTikkle } = useUserStore();
  const navigate = useNavigate();
  const tokenCheck = () => {
    axios
      .post(
        'https://j9c211.p.ssafy.io/api/member-management/members/check/access-token',
        {},
        {
          headers: {
            'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        },
      )
      .then((res) => {
        if (res.data.response === false) {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/');
      });
  };
  useEffect(() => {
    tokenCheck();
    if (connectedAsset === false || createdTikkle === false) {
      navigate('/main');
    }
  }, []);
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
    console.log(savingTikkleInfo.response);
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
