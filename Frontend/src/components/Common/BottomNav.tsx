import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div>
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
    </div>
  );
};

export default BottomNav;
