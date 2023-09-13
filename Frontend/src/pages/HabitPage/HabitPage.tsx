import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'components/Habit/Calendar';
import HabitList from 'components/Habit/HabitList';
const HabitPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>습관저금페이지</div>
      <Calendar />
      <button onClick={() => navigate('/habit/create')}>습관생성++</button>
      <HabitList />
      <button>POST_오늘습관저금</button>
    </div>
  );
};

export default HabitPage;
