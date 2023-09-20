import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
const MainAssetRegister = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="w-80 relative">
        <img
          onClick={() => {
            navigate('/main/asset/register');
          }}
          src="/Card/before_register.png"
          alt="asset_register"
        />
        <div className="absolute top-28 left-[27%]">
          <span className="text-white text-xl font-medium">내 계좌 등록하기</span>
        </div>
      </div>
    </div>
  );
};

export default MainAssetRegister;
