import React, { useState,useEffect } from 'react';
import BuyifRegister from 'components/BuyifCreate/BuyifRegister';
import BottomNav from 'components/Common/BottomNav';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useNavigate } from 'react-router-dom';


const BuyifCreatePage = () => {
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
    if (connectedAsset === false || createdTikkle === false) {
      navigate('/main');
    }
  }, []);

  return (
    <div>
      <BuyifRegister />
      <BottomNav />
    </div>
  );
};

export default BuyifCreatePage;
