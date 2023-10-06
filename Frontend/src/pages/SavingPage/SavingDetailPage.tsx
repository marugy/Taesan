import React,{useEffect} from 'react';
import SavingDday from 'components/SavingDetail/SavingDday';
import SavingList from 'components/SavingDetail/SavingList';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/UserStore';
const SavingDetailPage = () => {
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
      <ArrowBack pageName="적금통 상세내역" />
      <SavingDday />
      <SavingList />
      <BottomNav />
    </div>
  );
};

export default SavingDetailPage;
