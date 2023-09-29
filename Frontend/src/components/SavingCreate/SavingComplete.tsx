import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { screen } from '@testing-library/react';

const SavingComplete = ({ onComplete }: { onComplete: () => void }) => {
  const navigate = useNavigate();
  return (
    <div className="flex inset-0 items-center fixed h-screen  w-full z-50 flex-col bg-back">
      <img src="/piggy_bank.png" className="h-64 m-10" />
      <div className="flex flex-col items-center">
        <div className="text-lg text-gray-500">'태산' 사용을 위한 적금통을 </div>
        <div className="text-lg text-gray-500">성공적으로 생성했습니다.</div>
        <div className="text-lg text-main font-bold my-5">적금통 생성 완료</div>
        <div className="">
          <Button color="blue" onClick={onComplete}>
            홈 화면 가기
          </Button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default SavingComplete;
