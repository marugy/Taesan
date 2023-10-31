import React from 'react';
import { useNavigate } from 'react-router-dom';

const HabitItem = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/habit/detail')}>
        <div>아이콘</div>
        <div>물품이름</div>
        <div>날짜</div>
        <div>아낀 금액 + 아낄 수있는 금액</div>
      </button>
    </div>
  );
};

export default HabitItem;
