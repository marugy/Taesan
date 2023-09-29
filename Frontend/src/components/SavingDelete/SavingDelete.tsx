import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const SavingDelete = () => {
  const navigate = useNavigate();
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);
  return (
    <div className="bg-back">
      <div className="flex justify-end mr-5 mt-5">
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
      <div className="flex justify-center">
        <img className="h-44 dt:h-64" src="/piggy_bank.png" alt="pig" />
      </div>
      <div className="flex flex-col items-center mx-5 ">
        <div className="border-4 rounded-xl mb-5 p-3">
          <div className="mb-2">
            <span className="text-sm dt:text-xl text-gray-500 ">현재 적금통에 적립된 금액 : </span>
            <span className="text-sm dt:text-xl text-main font-bold">$NowSavingMoney</span>
          </div>
          <div className="mb-2">
            <span className="text-sm dt:text-xl text-gray-500">만기까지 남은 일자 : </span>
            <span className="text-sm dt:text-xl text-main font-bold">$duration일($today)</span>{' '}
          </div>
          <div className="">
            <span className="text-sm dt:text-xl text-gray-500">만기시 예상 출금액 : </span>
            <span className="text-sm dt:text-xl text-main font-bold">$fullMoney</span>
          </div>
        </div>
        <div className="text-sm dt:text-xl text-gray-800 ">적금통 계좌 해지 안내입니다.</div>
        <div className="text-xs dt:text-lg text-gray-800 mx-10">
          적금통 계좌를 해지하시기 전에 위 주의 사항을 숙고하시고, 궁금한 사항은 문의바랍니다. 주의! 계좌를 해지하게
          되면 현재까지의 이자를 받을 수 없습니다.
        </div>
        <Button
          className="my-4"
          size="lg"
          color="red"
          onClick={() => {
            navigate('/saving/delete');
          }}
        >
          적금통 해지하기
        </Button>
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
  );
};

export default SavingDelete;
