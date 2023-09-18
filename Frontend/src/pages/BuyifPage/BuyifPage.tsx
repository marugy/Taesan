import React from 'react';
import { useNavigate } from 'react-router-dom';

import AssetCard from 'components/BuyIf/AssetCard';

const BuyIfPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>샀다치고페이지</div>
      <AssetCard />
      <button onClick={() => navigate('/buyif/create')}>샀다치고 생성</button>
      <div>
        <button>GET_샀다치고 리스트</button>
      </div>
    </div>
  );
};

export default BuyIfPage;
