import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import OnedaySaveMoney from './OnedaySaveMoney';

const HabitCalendar = () => {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const selectedDate = date.format('YYYY년 MM월 DD일');
  // const selectedDate = 'asdf';

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY년 MM월 DD일'), mode);
  };

  const onSelect = (newDay: Dayjs) => {
    setDate(newDay);
  };

  return (
    <div>
      {/* 달력을 띄우고 달력에서 클릭한 날짜를 YYYY년 MM월 DD일 형태로 보여주기 */}
      <Calendar value={date} onSelect={onSelect} onPanelChange={onPanelChange} />
      <OnedaySaveMoney selectedDate={selectedDate} />
    </div>
  );
};

export default HabitCalendar;
