import React,{useEffect} from 'react';
import HistoryDetail from 'components/HistoryDetail/HistoryDetail';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/UserStore';
import axios from 'axios';

const HistoryDetailPage = () => {
  const { accessToken, refreshToken,connectedAsset } = useUserStore();
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
    if (connectedAsset === false) {
      navigate('/main');
    }
  }, []);
  return (
    <div>
      <ArrowBack pageName='상세내역'/>
      <HistoryDetail/>
      <BottomNav/>
    </div>
  );
};

export default HistoryDetailPage;