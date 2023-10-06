import React from 'react';
import { useNavigate } from 'react-router';
interface CardInfo {
  cardId: number;
  cardCompany: string;
  cardNumber: string;
  cardType: string;
  main: string;
  name: string;
}

const Card = ({ cardId, cardCompany, cardNumber, cardType, main, name }: CardInfo) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center my-5">
      <div className="relative">
        <img src={`/Card/${cardCompany}.png`} className="h-36" alt="Card1" />
        {/* <img src={`/Card/Card1.png`} className="h-36" alt="Card1" /> */}

        <div className="absolute top-4 left-4">
          <span className="text-white text-md">{cardType === '01' ? 'Credit' : cardType === '02' ? 'Check' : cardType === '03' ? 'Hybrid' : ''}</span>
        </div>
        <div className="absolute bottom-10 left-4">
          <span className="text-white text-sm">{name}</span>
        </div>
        <div className="absolute bottom-5 left-4">
          <span className="text-white text-sm">{cardNumber}</span>
        </div>
        <div className="absolute bottom-2 right-2 w-[30px] h-[30px]">
              <img src={`/Account/${cardCompany}.png`} className="h-8 rounded-full" />
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
