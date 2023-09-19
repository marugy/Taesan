import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
const MainMenu = () => {
  const navigate = useNavigate();
  return (
    // Grid로 2행 2열로 4개의 버튼이 들어갈 곳을 4개의 div로 각각 배치.
    <div className="grid grid-cols-2 grid-rows-2 text-center gap-4 mx-8 h-[20vh]">
      <div>
        <Button
          color="pink"
          onClick={() => {
            navigate('/buyif');
          }}
          className="w-full h-full"
        >
          샀다 치고
        </Button>
      </div>
      <div>
        <Button color="blue" onClick={() => navigate('/habit')} className="w-full h-full">
          습관 저금통
        </Button>
      </div>
      <div>
        <Button color="cyan" onClick={() => navigate('/challenge')} className="w-full h-full">
          절약 챌린지
        </Button>
      </div>
      <div>
        <Button color="deep-purple" onClick={() => navigate('/pattern')} className="w-full h-full">
          내 소비패턴
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
