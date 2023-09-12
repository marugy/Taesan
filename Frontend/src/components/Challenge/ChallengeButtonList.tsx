import React from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledButton } from './ChallengeButtonListStyles';

const ChallengeButtonList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <StyledButton onClick={() => navigate('/challenge/create')}>생성하기</StyledButton>
        <StyledButton>같이하기</StyledButton>
      </div>
      <br />
      <div>
        <StyledButton onClick={() => navigate('/challenge/recruit')}>모집중</StyledButton>
      </div>
      <br />
      <div>
        <StyledButton onClick={() => navigate('/challenge/play')}>진행중</StyledButton>
      </div>
      <br />
      <div>
        <StyledButton onClick={() => navigate('/challenge/result')}>이전 챌린지</StyledButton>
      </div>
    </div>
  );
};

export default ChallengeButtonList;
