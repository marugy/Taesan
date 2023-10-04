import React,{useEffect} from 'react';
import ChallengeButtonList from 'components/Challenge/ChallengeButtonList';
import ChallengeSaving from 'components/Challenge/ChallengeSaving';
import BottomNav from 'components/Common/BottomNav';
import ArrowBackParam from 'components/Common/ArrowBackParam';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/UserStore';

const ChallengePage = () => {
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
    <div className=" overflow-hidden">
      <ArrowBackParam pageName="절약 챌린지" param="/main" />
      <div className="flex flex-col items-center h-[90%] justify-center">
        <ChallengeSaving />
        <ChallengeButtonList />
        <div className="h-[120px]"></div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ChallengePage;
