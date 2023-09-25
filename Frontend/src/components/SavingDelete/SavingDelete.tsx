import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const SavingDelete = () => {
  const navigate = useNavigate();
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);
  return (
    <div className="bg-back">
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
      <div className="text-center text-3xl text font-semibold mt-5">
        이지헌님의 <br /> 적금통 해지하기
      </div>
      <div className="flex justify-center h-64">
        <img src="/piggy_bank.png" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-lg text-gray-500">현재 적금통에 적립된 금액</div>
        <div className="text-lg text-main font-bold">56,000원</div>
        <div className="text-lg text-gray-500">만기까지 남은 일자 : </div>
        <div className="text-lg text-main font-bold">87일(2023-12-25)</div>{' '}
        <div className="text-lg text-gray-500">만기시 예상 출금액</div>
        <div className="text-lg text-main font-bold">56,712원</div>
        <div className="">
          <div className="w-full">
            <Button
              size="lg"
              color="red"
              onClick={() => {
                navigate('/saving/delete');
              }}
            >
              적금통 해지하기
            </Button>
          </div>
          <div className="w-full">
            <Button
              size="lg"
              color="blue-gray"
              onClick={() => {
                navigate('/main');
              }}
            >
              홈 화면 가기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingDelete;
