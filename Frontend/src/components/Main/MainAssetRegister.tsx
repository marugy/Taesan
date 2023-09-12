import React from 'react';
import { MainAssetRegisterContainer } from './MainAssetRegisterStyles';
import { useNavigate } from 'react-router-dom';
const MainAssetRegister = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainAssetRegisterContainer
        onClick={() => {
          navigate('/main/asset/register');
        }}
      >
        내 계좌 등록하기
      </MainAssetRegisterContainer>
    </div>
  );
};

export default MainAssetRegister;
