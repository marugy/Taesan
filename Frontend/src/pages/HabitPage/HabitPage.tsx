import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import HabitCalendar from 'components/Habit/HabitCalendar';
import OnedaySaveMoney from 'components/Habit/OnedaySaveMoney';
import HabitList from 'components/Habit/HabitList';
import ModalSaveMoney from 'components/Habit/ModalSaveMoney';
import { Button } from '@material-tailwind/react';

const HabitPage = () => {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const selectedDate = date.format('YYYY년 MM월 DD일');

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY년 MM월 DD일'), mode);
  };

  const onSelect = (newDay: Dayjs) => {
    setDate(newDay);
  };

  return (
    <div>
      <div className="text-main text-3xl font-bold">내 습관 절약</div>
      <div className="text-xl font-semibold mt-5">총 절약 금액 : 45,000원</div>
      {/* 달력 */}
      <Calendar value={date} onSelect={onSelect} onPanelChange={onPanelChange} />
      {/* 좋은 습관을 통해 하루에 아낀 돈 */}
      <OnedaySaveMoney selectedDate={selectedDate} />
      {/* 진행중 & 완료에 따른 습관 목록 띄우기 */}
      <HabitList />
      {/* <Button color="blue">오늘의 습관 저금</Button> */}
      <ModalSaveMoney />
    </div>
  );
};

export default HabitPage;
