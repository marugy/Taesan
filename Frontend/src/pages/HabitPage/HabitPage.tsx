import React from 'react';
import Calendar from 'components/Habit/Calendar';
import HabitList from 'components/Habit/HabitList';

import OnedaySaveMoney from 'components/Habit/OnedaySaveMoney';
const HabitPage = () => {
  return (
    <div>
      <h1>내 습관 절약</h1>
      <h1>총 절약 금액 : 45,000원</h1>
      <Calendar />
      <OnedaySaveMoney />
      <HabitList />
    </div>
  );
};

export default HabitPage;
