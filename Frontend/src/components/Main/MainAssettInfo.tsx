import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainAssettInfo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>내자산</h1>
      <div>농협 : 5,600원</div>
      <button
        onClick={() => {
          navigate('/saving/create');
        }}
      >
        적금통 만들기
      </button>
    </div>
  );
};

export default MainAssettInfo;
