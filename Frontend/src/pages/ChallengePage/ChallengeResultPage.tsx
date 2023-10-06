import React,{useEffect} from 'react';

import ChallengeResultList from 'components/ChallengeResult/ChallengeResultList';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import ArrowBackParam from 'components/Common/ArrowBackParam';
import { useUserStore } from 'store/UserStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChallengeResultPage = () => {
  console.log('GET_이전 챌린지 리스트');
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
      <ArrowBackParam pageName="이전 챌린지 목록" param="/challenge" />
      <div className="flex flex-col items-center">
        <ChallengeResultList />
      </div>
      <BottomNav />
    </div>
  );
};

export default ChallengeResultPage;
