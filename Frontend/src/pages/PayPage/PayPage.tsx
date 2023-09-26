import Card from 'components/Common/Card';
import React from 'react';

const PayPage = () => {
  return (
    <div>
      <div>결제페이지</div>
      <Card
        name="LEE JI HEON"
        cardNumber="6011 - 6175 - 8192 - 2346"
        cardCompany="신한은행"
        main=""
        cardId={123}
        cardType="Credit"
      />
      <div>GET_랜덤 결제할 상품</div>
      <button>POST_결제하기</button>
    </div>
  );
};

export default PayPage;
