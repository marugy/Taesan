import { Button } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengeButtonList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="m-5 space-x-5">
        <Button onClick={() => navigate('/challenge/create')}>생성하기</Button>
        <Button>같이하기</Button>
      </div>
      {/* <Button onClick={() => navigate('/challenge/recruit')}>모집중</Button>
      <Button onClick={() => navigate('/challenge/play')}>진행중</Button> */}
      <div>
        <Button onClick={() => navigate('/challenge/result')}>이전 챌린지</Button>
      </div>
    </div>
  );
};

export default ChallengeButtonList;
