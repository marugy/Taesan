import React from 'react';
import { Avatar } from '@material-tailwind/react';
const AssetCard = () => {
  return (
    <div className="flex justify-center items-center mx-auto">
        <div>
          <div style={{ backgroundImage: 'url("/Card/Buyif_card.png")', backgroundSize: '100% 100%' }} className='dt:w-[500px] dt:h-[260px] tb:w-[400px] tb:h-[220px] w-[320px] h-[170px] flex flex-col items-center justify-between'>
            <div className='w-[90%] flex justify-start my-2'>
              <Avatar variant="circular" className="p-1" alt="candice" src={`/piggy_bank.png`} />
            </div>
            <div className='w-[90%] flex justify-between'>
              <div>잔액</div>
              <div>30000원</div>
            </div>
            <div className='bg-white w-[90%] h-[40%] rounded-md my-2 flex flex-col items-center justify-evenly'>
              <div className='w-[90%] flex justify-between'>
                <div>티끌 머니</div>
                <div>5600원</div>
              </div>
              <div className='w-[90%] flex justify-between'>
                <div>커피로 환산하면?</div>
                <div> 50000x 커피</div>
              </div>
            </div>
          </div>

        </div>
        
    </div>
  );
};

export default AssetCard;
