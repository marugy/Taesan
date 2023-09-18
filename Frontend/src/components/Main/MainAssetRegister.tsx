import React from 'react';
import { useNavigate } from 'react-router-dom';
const MainAssetRegister = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/main/asset/register');
        }}
      >
        내 계좌 등록하기
      </button>
    </div>
  );
};

export default MainAssetRegister;
