import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import OnedaySaveMoney from './OnedaySaveMoney';
import axios from 'axios';
import { useQuery } from 'react-query';
const HabitCalendar = () => {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const selectedDate = date.format('YYYY년 MM월 DD일');

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
     // 패널이 변경될 때 연도와 월 추출
     const year = value.format('YYYY');
     const month = value.format('MM');
    console.log(year, month); 
    // console.log(value.format('YYYY년 MM월 DD일'), mode);
  };

  const onSelect = (newDay: Dayjs) => {
    setDate(newDay);
  };
 // 각 날짜 셀을 커스터마이즈하기 위한 함수
 const dateCellRender = (date: Dayjs) => {
  const day = date.format('DD');
  const money = moneyData[day]; // 해당 날짜의 아낀 금액


  

  return (
    <div>
      <span>{day}</span>
      {money && <div className="money-badge">{money}원</div>}
    </div>
  );
};

 // react-query를 사용하여 데이터 가져오기
 const { data: moneyData, isLoading, isError } = useQuery(['savingData', date.format('YYYY-MM')], () =>
 axios.get(`/api/savingData?year=${date.format('YYYY')}&month=${date.format('MM')}`).then((response) => response.data.response.dayList)
);

if (isLoading) {
 // 데이터 로딩 중에 표시할 내용
 return <div>Loading...</div>;
}

if (isError) {
 // 데이터 가져오기에 오류가 발생한 경우
 return <div>Error loading data</div>;
}
  return (
    <div>
      {/* 달력을 띄우고 달력에서 클릭한 날짜를 YYYY년 MM월 DD일 형태로 보여주기 */}
      <Calendar value={date} onSelect={onSelect} onPanelChange={onPanelChange} dateCellRender={dateCellRender} />
      <OnedaySaveMoney selectedDate={selectedDate} />
    </div>
  );
};

export default HabitCalendar;
