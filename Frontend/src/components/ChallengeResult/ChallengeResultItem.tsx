import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  challengeMoney: string;
  saveMoney: string;
  duration: string;
  isSave: boolean;
}

const ChallengeResultItem = ({ title, challengeMoney, saveMoney, duration, isSave }: Props) => {
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('해당 절약챌린지 아낀 금액 : Prop 이체 페이지 넘기기');
  };

  return (
    <div className="tb:w-[450px] dt:w-[500px] border">
      <div className="flex flex-col items-center ml-10 mr-20">
        <Button
          variant="text"
          className="font-bold text-lg dt:text-[25px] my-2"
          onClick={() => navigate('/challenge/result/detail')}
        >
          아와왕아왕하기싫?어?
        </Button>
      </div>
      <div className="flex mb-3 mr-3 justify-between">
        <div className="ml-5 text-[13px] dt:text-[15px]">
          <div className=" ">￦ 30,000 / 100,000</div>
          <div className="">2023-08-29~2023-09-05</div>
        </div>
        <Button className="bg-main p-3 dt:text-[20px]" onClick={handleSave}>
          아낀 금액 전환
        </Button>
      </div>
    </div>
  );
};

export default ChallengeResultItem;
