import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { screen } from '@testing-library/react';
import { useUserStore } from 'store/UserStore';
import dayjs from 'dayjs';
interface SavingInfoProps {
  savingInfo: any;
}

const SavingInfo: React.FC<SavingInfoProps> = ({ savingInfo }) => {
  const today = dayjs(); // 오늘 날짜
  const expirationDate = dayjs(savingInfo.endDate).diff(today, 'day') + 1; // 오늘과 만기일 사이의 날짜 차이
  const { name } = useUserStore();
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <ArrowBack pageName="내 적금통" />
      <div className="flex justify-end mr-5">
        <Button
          color="blue"
          onClick={() => {
            navigate('/saving/detail');
          }}
        >
          상세 내역
        </Button>
      </div>
      <div className="text-center text-blue-500 text-3xl text font-semibold mt-5">
        {name}님의 <br /> 적금통 조회하기
      </div>
      <div className="flex justify-center h-64 dt:h-96">
        <img src="/Main/습관저금통.png" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-xl text-gray-700 font-bold">현재 적금통에 적립된 금액</div>
        <div className="text-lg text-blue-600 ">{savingInfo.curMoney}원</div>
        <div className="text-xl text-gray-700 font-bold">만기일</div>
        <div className="text-lg text-blue-600 ">{dayjs(savingInfo.endDate).format('YYYY년 MM월 DD일')}</div>
        <div className="text-xl text-gray-700 font-bold">만기까지 남은 일자 : </div>
        <div className="text-lg text-blue-600 ">{expirationDate}일</div>{' '}
        <div className="text-xl text-gray-700 font-bold">만기시 예상 출금액</div>
        <div className="text-lg text-blue-600 ">{savingInfo.futureMoney}원</div>
        <div>
          <Button
            color="red"
            onClick={() => {
              navigate('/saving/delete');
            }}
          >
            적금통 해지하기
          </Button>
        </div>
        <div className="h-[120px]" />
      </div>
      <BottomNav />
    </div>
  );
};

export default SavingInfo;
