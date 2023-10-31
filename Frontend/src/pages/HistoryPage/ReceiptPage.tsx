import React,{useEffect} from 'react';
import ReceiptList from 'components/Receipt/ReceiptList';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store/UserStore';
import axios from 'axios';
const ReceiptPage = () => {
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
    if (connectedAsset === false ) {
      navigate('/main');
    }
  }, []);
  return (
    <div>
      <ReceiptList/>
    </div>
  );
};

export default ReceiptPage;