import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
const SavingInfo = () => {
  const navigate = useNavigate();
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
      <div className="text-center text-main text-3xl text font-semibold mt-5">
        [Name]님의 <br /> 적금통 조회하기
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
        <div>
          <Button
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
  );
};

export default SavingInfo;
