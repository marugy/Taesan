import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledBottomNav } from './BottomNavStyles';

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <StyledBottomNav>
      <button
        onClick={() => {
          navigate('mypage');
        }}
      >
        마이페이지
      </button>
      <button
        onClick={() => {
          navigate('main');
        }}
      >
        홈
      </button>

      <button
        onClick={() => {
          navigate('pay');
        }}
      >
        카드
      </button>
    </StyledBottomNav>
  );
};

export default BottomNav;
