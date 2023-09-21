import React from 'react';
import HabitCalendar from 'components/Habit/HabitCalendar';
import OnedaySaveMoney from 'components/Habit/OnedaySaveMoney';
import HabitList from 'components/Habit/HabitList';

const HabitPage = () => {
  return (
    <div>
      <div className="text-main text-3xl font-bold">
        내 습관 절약
      </div>
      <div className="text-xl font-semibold mt-5">
      총 절약 금액 : 45,000원
      </div>
      <HabitCalendar />
      <OnedaySaveMoney />
      <HabitList />
    </div>
  );
};

export default HabitPage;
