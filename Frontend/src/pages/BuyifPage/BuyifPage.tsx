import React from 'react';
import { useNavigate } from 'react-router-dom';
import BuyifList from 'components/BuyIf/BuyifList';
import AssetCard from 'components/BuyIf/AssetCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const BuyIfPage = () => {
  const navigate = useNavigate();
  return (
    <div className='my-24'>
      <div className='mx-6 my-7 font-bold text-2xl'>내 자산</div>
      <AssetCard />
      <div className='w-[90%] mx-6 my-7 flex justify-between'>
        <div className='font-bold text-xl'>내가 샀다 치는 물건</div>
        <button onClick={() => navigate('/buyif/create')}><AddCircleIcon  color='primary' fontSize='large'/></button>
      </div>
      <BuyifList/>

    </div>
  );
};

export default BuyIfPage;
