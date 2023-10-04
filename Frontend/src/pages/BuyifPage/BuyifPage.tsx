import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BuyifList from 'components/BuyIf/BuyifList';
import AssetCard from 'components/BuyIf/AssetCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomNav from 'components/Common/BottomNav';
import ArrowBackParam from 'components/Common/ArrowBackParam';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useUserStore } from 'store/UserStore';
import { response } from 'express';

const BuyIfPage = () => {
  const navigate = useNavigate();
  const [buyIfList, setBuyIfList] = useState([]);
  const [userBalance, setUserBalance] = useState(0);
  const [userBank, setUserBank] = useState('');
  const [tikkle, setTikkle] = useState(0);
  const [mostBuy, setMostBuy] = useState('');
  const [mostBuyPrice, setMostBuyPrice] = useState(0);
  const { accessToken, refreshToken } = useUserStore();
  const getBuyif = async () => {
    const { data } = await axios.get('https://j9c211.p.ssafy.io/api/ifbuy-management/ifbuys', {
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    });
    console.log(data);
    setBuyIfList(data.response.item_list);
    setUserBalance(data.response.balance);
    setUserBank(data.response.bank);
    setTikkle(data.response.tikkle);
    setMostBuy(data.response.most_buy);
    setMostBuyPrice(data.response.most_buy_price);
  };
  const query = useQuery('getBuyif', getBuyif);
  return (
    <div>
      <ArrowBackParam pageName="샀다치고" param="/main" />
      <div className="mx-6 my-7 font-bold text-2xl">내 자산</div>
      <AssetCard
        userbalance={userBalance}
        userbank={userBank}
        tikkle={tikkle}
        mostbuy={mostBuy}
        mostbuyprice={mostBuyPrice}
      />
      <div className="w-[90%] mx-6 my-7 flex justify-between">
        <div className="font-bold text-xl">내가 샀다 치는 물건</div>
        <button onClick={() => navigate('/buyif/create')}>
          <AddCircleIcon color="primary" fontSize="large" />
        </button>
      </div>
      <BuyifList buyiflist={buyIfList} mostbuy={mostBuy} mostbuyprice={mostBuyPrice} />
      <div className="h-[100px]" />
      <BottomNav />
    </div>
  );
};

export default BuyIfPage;
