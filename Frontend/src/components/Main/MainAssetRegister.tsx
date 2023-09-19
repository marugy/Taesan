import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
const MainAssetRegister = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="w-80 ">
        <img
          onClick={() => {
            navigate('/main/asset/register');
          }}
          src="/Card/before_register.png"
          alt="asset_register"
        />
      </div>
    </div>
  );
};

export default MainAssetRegister;
