import React, { useEffect, useState } from 'react';
import Card from 'components/Common/Card';
import HistoryList from 'components/History/HistoryList';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { response } from 'express';


const HistoryPage = () => {
  const { accessToken, refreshToken } = useUserStore();
  const [cardUser,setCardUser]= useState('')
  const [cardNumber,setCradNumber]=useState('')
  const [cardCompany,setCradCompany]=useState('')

  // const getHistory = () =>{
  //   axios.get(`https://j9c211.p.ssafy.io/api/transactions/hisotry/${cardid}`, {
  //       headers: {
  //       'ACCESS-TOKEN': accessToken,
  //       'REFRESH-TOKEN': refreshToken,
  //       },
  //   })
  //   .then((response)=>{
  //     setCardUser(response.data.card.name)
  //     setCradNumber(response.data.card.cardNumber)
  //     setCradCompany(response.data.card.cardCompany)
  //     console.log(response)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }
  // useEffect(
  //   getHistory
  // ,[])
  
  return (
    <div>
      <ArrowBack pageName="거래내역" />
      <Card
        name="LEE JI HEON"
        cardNumber="6011 - 6175 - 8192 - 2346"
        cardCompany="신한은행"
        main=""
        cardId={123}
        cardType="Credit"
      />
      <HistoryList />
      <BottomNav />
    </div>
  );
};

export default HistoryPage;
