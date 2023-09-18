import React from 'react';
import { StyledAssetCard } from './AssetCardStyles';

const AssetCard = () => {
  return (
    <StyledAssetCard>
      <button>GET</button>
      <div>GET_잔액조회</div>
      <div>GET_티끌머니</div>
      <div>GET_자주 이용하는 업종 == 대표 아이콘 계산해서 환산</div>
    </StyledAssetCard>
  );
};

export default AssetCard;
