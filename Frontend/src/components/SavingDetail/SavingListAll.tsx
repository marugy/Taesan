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

  return (
    <div>
      {transList.map((transaction, index) => (
        <div key={index} className="border-2 flex justify-between">
          <div>{transaction.createDate}</div>
          <div className="flex flex-col justify-center items-center">
            <div>{transaction.transAmount}원</div>
            <div className="text-sm">{transaction.totalAmount}원</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavingListAll;
