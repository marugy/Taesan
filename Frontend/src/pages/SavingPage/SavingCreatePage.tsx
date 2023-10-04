import React, { useState,useEffect } from 'react';
import SavingCreate from 'components/SavingCreate/SavingCreate';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/UserStore';
import axios from 'axios';

const SavingCreatePage = () => {
  // const [createButton, setCreateButton] = useState(false);  const { accessToken, refreshToken,connectedAsset,createdTikkle } = useUserStore();
  const { accessToken, refreshToken,connectedAsset,createdTikkle } = useUserStore();
  const navigate = useNavigate();
  const tokenCheck = ()=>{
    axios.post('https://j9c211.p.ssafy.io/api/member-management/members/check/access-token',{},{
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    })
    .then((res)=>{
      
      if(res.data.response === false){
        navigate('/')
      }
    })
    .catch((err)=>{
      console.log(err)
      navigate('/')
    })
  }
  useEffect(() => {
    tokenCheck();
    if (connectedAsset === false || createdTikkle === true) {
      navigate('/main');
    }
  }, []);
  
  return (
    <div className="h-full overflow-hidden">
      <ArrowBack pageName="적금 만들기" />
      <SavingCreate />
      <BottomNav />
    </div>
  );
};

export default SavingCreatePage;
