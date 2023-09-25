import React from 'react';

interface CardInfo{
  cardnumber:number,
  name:string,
  assetnumber:string
}

const Card = ({cardnumber,name,assetnumber}:CardInfo) => {
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
    </div>
  </div>
  );
};

export default Card;
