import React from 'react';
import { useNavigate } from 'react-router';

interface CardInfo{
  cardnumber:number,
  name:string,
  assetnumber:string,
  main:string
}

const Card = ({cardnumber,name,assetnumber,main}:CardInfo) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center my-5'>
      <div className="relative">
        <img src={`/Card/Card${cardnumber}.png`} className="h-36" alt="Card1" />

        <div className="absolute top-4 left-4">
          <span className="text-white text-md">Credit</span>
        </div>
        <div className="absolute bottom-10 left-4">
          <span className="text-white text-sm">{name}</span>
        </div>
        <div className="absolute bottom-5 left-4">
          <span className="text-white text-sm">{assetnumber}</span>
        </div>
        {main !== '' && (
          <button className='absolute bottom-12 right-4 bg-blue-700 w-[30%] h-[20%] rounded-lg border-2 flex justify-center items-center' onClick={() => navigate('/history')}>
            <span className="text-white text-sm font-main">거래내역</span>
          </button>
        )}
    </div>
  </div>
  );
};

export default Card;
