import React from 'react';
import { Avatar } from '@material-tailwind/react';
interface PropsUserinfo {
  userbalance:number,
  userbank:string,
  tikkle:number,
  mostbuy:string,
  mostbuyprice:number
}
const AssetCard = ({userbalance,userbank,tikkle,mostbuy,mostbuyprice}:PropsUserinfo) => {
  return (
    <div className="flex justify-center items-center mx-auto">
        <div>
          <div style={{ backgroundImage: 'url("/Card/Buyif_card.png")', backgroundSize: '100% 100%' }} className='dt:w-[500px] dt:h-[260px] tb:w-[400px] tb:h-[220px] w-[320px] h-[170px] flex flex-col items-center justify-between'>
            <div className='w-[90%] flex justify-start my-2'>
              <Avatar variant="circular" className="p-1" alt="candice" src={`/Account/${userbank}.png`} />
            </div>
            <div className='w-[90%] flex justify-between'>
              <div className='font-main text-white text-lg'>잔액</div>
              <div className='font-main text-white font-bold text-lg'>₩{userbalance?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
            </div>
            <div className='bg-white w-[90%] h-[40%] rounded-md my-2 flex flex-col items-center justify-evenly'>
              <div className='w-[90%] flex justify-between'>
                <div className='font-main'>티끌 머니</div>
                <div className='font-main font-bold'>₩{tikkle?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
              </div>
              <div className='w-[90%] flex justify-between'>
                <div className='font-main'>{mostbuy}으로 환산하면?</div>
                <div className='font-main font-bold text-lg flex items-center'> {Math.floor(tikkle / mostbuyprice)} X 
                <div className='w-7 aspect-square'>
                  <img src={`/Mostbuy/${mostbuy}.png`} alt="" />
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
    </div>
  );
};

export default AssetCard;
