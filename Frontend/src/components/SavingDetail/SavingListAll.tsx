import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';

const SavingListAll = () => {
  const { accessToken, refreshToken } = useUserStore();
  const [transList, setTransList] = useState([{ createDate: '', transAmount: 0, totalAmount: 0 }]);

  useEffect(() => {
    axios
      .get(`https://j9c211.p.ssafy.io/api/asset-management/tikkle/history`, {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((res) => {
        console.log(res.data.response);
        setTransList(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(transList);

  const formatDate = (dateTime: any) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div>
      {transList.map((transaction, index) => (
        <div key={index} className="border-2 flex justify-between">
          <div>{formatDate(transaction.createDate)}</div>
          <div className="flex flex-col justify-center items-center">
            <div>{transaction.transAmount}원</div>
            <div className="text-xs">{transaction.transAmount + transaction.totalAmount}원</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavingListAll;
