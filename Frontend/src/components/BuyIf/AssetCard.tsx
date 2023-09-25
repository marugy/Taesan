import React from 'react';
import { Avatar } from '@material-tailwind/react';
const AssetCard = () => {
  return (
    <div className="flex justify-center items-center mx-auto">
        <div>
          <div style={{ backgroundImage: 'url("/Card/Buyif_card.png")', backgroundSize: '100% 100%' }} className='dt:w-[500px] dt:h-[260px] tb:w-[400px] tb:h-[220px] w-[320px] h-[170px] flex flex-col items-center justify-between'>
            <div className='w-[90%] flex justify-start my-2'>
              <Avatar variant="circular" className="p-1" alt="candice" src={`/Account/NH.png`} />
            </div>
            <div className='w-[90%] flex justify-between'>
              <div className='font-main text-white text-lg'>잔액</div>
              <div className='font-main text-white font-bold text-lg'>₩30,000원</div>
            </div>
            <div className='bg-white w-[90%] h-[40%] rounded-md my-2 flex flex-col items-center justify-evenly'>
              <div className='w-[90%] flex justify-between'>
                <div className='font-main'>티끌 머니</div>
                <div className='font-main font-bold'>₩5,600원</div>
              </div>
              <div className='w-[90%] flex justify-between'>
                <div className='font-main'>커피로 환산하면?</div>
                <div className='font-main font-bold text-lg'> 1 X ☕</div>
              </div>
            </div>
          </div>

        </div>
        
    </div>
  );
};

export default AssetCard;
