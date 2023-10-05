import React from 'react';
import { Avatar, Typography, Tooltip } from '@material-tailwind/react';
import { useUserStore } from 'store/UserStore';
interface PropsUserinfo {
  userbalance: number;
  userbank: string;
  tikkle: number;
  mostbuy: string;
  mostbuyprice: number;
}
const AssetCard = ({ userbalance, userbank, tikkle, mostbuy, mostbuyprice }: PropsUserinfo) => {
  const { name } = useUserStore();
  return (
    <div className="flex justify-center items-center mx-auto">
      <div>
        <div
          style={{ backgroundImage: 'url("/Card/Buyif_card.png")', backgroundSize: '100% 100%' }}
          className="dt:w-[500px] dt:h-[260px] tb:w-[400px] tb:h-[220px] w-[320px] h-[170px] flex flex-col items-center justify-between"
        >
          <div className="w-[90%] flex justify-start my-2">
            <Avatar variant="circular" className="p-1" alt="candice" src={`/Account/${userbank}.png`} />
          </div>
          <div className="w-[90%] flex justify-between">
            <div className="font-main text-white text-lg">잔액</div>
            <div className="font-main text-white font-bold text-lg">
              ₩{userbalance?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </div>
          </div>
          <div className="bg-white w-[90%] h-[40%] rounded-md my-2 flex flex-col items-center justify-evenly">
            <div className="w-[90%] flex justify-between">
              <div className="font-main">티끌 머니</div>
              <div className="font-main font-bold">₩{tikkle?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
            </div>
            <div className="w-[90%] flex justify-between">
              <Tooltip
                placement="bottom"
                className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                content={
                  <div className="w-80">
                    <Typography color="blue-gray" className="font-semibold">
                      환산 품목 산정 기준
                    </Typography>
                    <Typography variant="small" color="blue-gray" className="font-normal opacity-80">
                      {name}님의 지난 달 소비 패턴을 분석해서 <br />
                      가장 많이 소비한 카테고리의 '대표품목 '을 나타냅니다.
                    </Typography>
                  </div>
                }
              >
                <div className="flex flex-row">
                  <div className="font-main">{mostbuy}으로 환산하면?</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5 cursor-pointer text-blue-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </div>
                </div>
              </Tooltip>

              <div className="font-main font-bold text-lg flex items-center">
                {' '}
                {Math.floor(tikkle / mostbuyprice)} X
                <div className="w-7 aspect-square">
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
