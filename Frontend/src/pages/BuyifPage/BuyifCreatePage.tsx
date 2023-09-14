import React, { useState } from 'react';

import { StyledButton } from './BuyifPageStyles';

const BuyifCreatePage = () => {
  const [item, setItem] = useState('');

  return (
    <div>
      <div>샀다치고 생성 페이지</div>
      <div>{item}</div>
      <div>
        <input type="text" onChange={(e) => setItem(e.target.value)} />
        <StyledButton>POST_샀다치고 등록</StyledButton>
      </div>
      <div>
        <StyledButton>지피티 도움!</StyledButton>
      </div>
    </div>
  );
};

export default BuyifCreatePage;
