import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

import ArrowBack from 'components/Common/ArrowBack';
import MainCardInfo from 'components/Main/MainCardInfo';
import { Pincode } from 'components/Common/Pincode';

import { Button } from '@material-tailwind/react';

const PayPage = () => {
  const navigate = useNavigate();
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

  const handlePay = () => {
    Swal.fire({
      title: '결제',
      html: `<span><b>$Title
            <br>
             ￦ $Price 
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

  const onCorrectPincode = () => {
    setPincodeVisible(false);
    // POST_결제 API

    Toast.fire({
      icon: 'success',
      title: '결제를 완료했습니다!',
    });
    navigate('/pay');
  };

  return (
    <div className="h-full overflow-hidden">
      {pincodeVisible && <Pincode onCorrectPincode={onCorrectPincode} />}
      <ArrowBack pageName="결제" />
      <div className="flex flex-col justify-center items-center gap-5">
        <MainCardInfo cardList={cardList} />
        <div className="border-4 rounded-xl p-5 gap-5 w-3/5 h-52 flex flex-col justify-center">
          <div className="text-xl">결제 내용</div>
          <div className="text-xl">$Title</div>
          <div className="text-xl">$Price</div>
          <div></div>
        </div>
        <Button className="bg-main tb:text-md dt:text-xl" onClick={handlePay}>
          결제하기
        </Button>
      </div>
    </div>
  );
};

export default PayPage;
