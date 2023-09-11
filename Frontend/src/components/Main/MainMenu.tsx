import React from 'react';
import { GridMainButton } from './MainMenuStyles';
import { useNavigate } from 'react-router-dom';
const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <GridMainButton>
        <button
          onClick={() => {
            navigate('/buyif');
          }}
        >
          샀다 치고
        </button>
        <button onClick={() => navigate('/habit')}>습관 저금통</button>
        <button onClick={() => navigate('/challenge')}>절약 챌린지</button>
        <button onClick={() => navigate('/pattern')}>내 소비패턴</button>
      </GridMainButton>
    </div>
  );
};

export default MainMenu;
