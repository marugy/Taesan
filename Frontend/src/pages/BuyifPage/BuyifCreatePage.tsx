import React, { useState } from 'react';

const BuyifCreatePage = () => {
  const [item, setItem] = useState('');

  return (
    <div>
      <div>샀다치고 생성 페이지</div>
      <div>{item}</div>
      <div>
        <input type="text" onChange={(e) => setItem(e.target.value)} />
        <button>POST_샀다치고 등록</button>
      </div>
      <div>
        <button>지피티 도움!</button>
      </div>
    </div>
  );
};

export default BuyifCreatePage;
