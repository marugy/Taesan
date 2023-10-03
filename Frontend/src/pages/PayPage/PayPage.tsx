import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from 'components/Common/BottomNav';
import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';
import { Input } from 'antd';
import ArrowBack from 'components/Common/ArrowBack';
import MainCardInfo from 'components/Main/MainCardInfo';
import { Pincode } from 'components/Common/Pincode';
import {Typography} from '@material-tailwind/react'
import { Button } from '@material-tailwind/react';
import { useUserStore } from 'store/UserStore';
import { useAssetStore } from 'store/AssetStore';
import axios from 'axios';
import { useQuery,} from 'react-query';

const PayPage = () => {
  const navigate = useNavigate();
  const {selectedCardId}=useAssetStore()
  const [itemname, setItemname] = useState('')
  const [itemprice,setItemprice] = useState('')
  const [cardid,setCardid] = useState('')
  const { accessToken, refreshToken} = useUserStore();
  const [pincodeVisible, setPincodeVisible] = useState(false); // 핀코드 화면
  const [cardList, setCardList] = useState([
    // Axios 쏘고 응답값 갈아 끼우기
    {
      cardId: 12312321321123121212,
      cardCompany: '신한은행',
      cardNumber: '2391-2812-3851-2847',
      cardType: 'Credit',
    },
    {
      cardId: 12312321321123121213,
      cardCompany: '카카오뱅크',
      cardNumber: '1364-1254-1634-1434',
      cardType: 'Credit',
    },
    {
      cardId: 12312321321123121213,
      cardCompany: '토스뱅크',
      cardNumber: '1534-1934-7834-9734',
      cardType: 'Check',
    },
    {
      cardId: 12312321321123121213,
      cardCompany: '우리은행',
      cardNumber: '1234-4812-4721-9281',
      cardType: 'Check',
    },
  ]); // 카드 리스트

  const getAsset = async () => {
    const { data: userAssetInfo } = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/assets/main', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    console.log(userAssetInfo);
    setCardList(userAssetInfo.response.cardList);
    return userAssetInfo;
  };
  const query2 = useQuery('getAsset', getAsset);
  const handlePay = () => {
    Swal.fire({
      title: '결제',
      html: `<span>
            <b>${itemname}
            <br>
             ￦ ${itemprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 
             <br>
             </b></span>
             <br>
             결제하시겠습니까?`,
      icon: 'question',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '결제',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        setPincodeVisible(true);
      }
    });
  };
  const handleItemnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemname(event.target.value);
  };
  const handleItempriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemprice(event.target.value);
};
  const onCorrectPincode = () => {
    setPincodeVisible(false);
    // POST_결제 API
    axios.post(`https://j9c211.p.ssafy.io/api/asset-management/assets/${selectedCardId}/pay`,{
      shop_name:itemname,
      pay_amt:itemprice
    },
    {
      headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
          } 
        })
      .then((res)=>{
        Toast.fire({
          icon: 'success',
          title: '결제를 완료했습니다!',
        });
        navigate('/pay');
      })
      .catch((err)=>{
        Toast.fire({
          icon: 'error',
          title: '결제에 실패했습니다!',
        });
        navigate('/pay');
      })
  };

  return (
    <div className="h-full overflow-hidden">
      {pincodeVisible && <Pincode onCorrectPincode={onCorrectPincode} />}
      <ArrowBack pageName="결제" />
      <div className="flex flex-col justify-center items-center gap-5">
        <MainCardInfo cardList={cardList} main={''}/>
        <div className="border-4 rounded-xl p-5 gap-5 w-4/5 h-3/5 flex flex-col justify-center">
        <Typography variant="h4" color="black"  >결제 내용</Typography>
          <Typography variant="h6" color="black" className='mx-3 my-1' >결제 장소</Typography>
          <Input size="large" placeholder="결제 장소" onChange={handleItemnameChange} />
          <Typography variant="h6" color="black" className='mx-3 my-1' >결제 가격</Typography>
          <Input size="large" placeholder="결제 가격" type='number' onChange={handleItempriceChange} />
          <div></div>
        </div>
        <Button className="bg-main tb:text-md dt:text-xl" onClick={handlePay}>
          결제하기
        </Button>
      </div>
      <BottomNav/>
    </div>
  );
};

export default PayPage;
