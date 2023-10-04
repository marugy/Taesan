import React,{useEffect} from 'react';
import ApproveMydata from 'components/ApproveMydata/ApproveMydata';
import { useUserStore } from 'store/UserStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ApproveMyData = () => {
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
  }, []);
  return (
    <div>
      <ApproveMydata />
    </div>
  );
};

export default ApproveMyData;
