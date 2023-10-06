import React,{useEffect} from 'react';
import Graph from 'components/Pattern/Graph';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/UserStore';
import axios
 from 'axios';
const PatternPage = () => {
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
    if (connectedAsset === false) {
      navigate('/main');
    }
  }, []);
  return (
    <div className='dt:w-screen dt:h-fit dt:absolute dt:left-0 dt:top-0 dt:bg-back'>
      <ArrowBack pageName='소비패턴 분석'/>
      <Graph/>
      <BottomNav/>
    </div>
  );
};

export default PatternPage;