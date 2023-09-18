import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengeButtonList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate('/challenge/create')}>생성하기</button>
        <button>같이하기</button>
      </div>
      <br />
      <div>
        <button onClick={() => navigate('/challenge/recruit')}>모집중</button>
      </div>
      <br />
      <div>
        <button onClick={() => navigate('/challenge/play')}>진행중</button>
      </div>
      <br />
      <div>
        <button onClick={() => navigate('/challenge/result')}>이전 챌린지</button>
      </div>
    </div>
  );
};

export default ChallengeButtonList;
