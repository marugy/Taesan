import React from 'react';
import { MainAssetRegisterContainer } from './MainAssetRegisterStyles';
import { useNavigate } from 'react-router-dom';
const MainAssetRegister = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainAssetRegisterContainer
        onClick={() => {
          navigate('/main/asset');
        }}
      ></MainAssetRegisterContainer>
    </div>
  );
};

export default MainAssetRegister;
