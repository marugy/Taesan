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
import BottomNav from 'components/Habit/BottomNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery,useMutation } from 'react-query';
// 한국어로 변환
import locale from "antd/es/calendar/locale/ko_KR";
import { getTotalCalendarMonth, getTotalCalendarDay } from 'api/habits';

const HabitPage = () => {
  const navigate = useNavigate();
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
//  const dateCellRender = (date: Dayjs) => {
//   const day = date.format('DD');
//   const money = moneyData[day]; // 해당 날짜의 아낀 금액
//   return (
//     <div>
//       <span>{day}</span>
//       {money && <div className="money-badge">{money}원</div>}
//     </div>
//   );
// };

 // react-query를 사용하여 데이터 가져오기 (첫 번째 쿼리키, 두번째 함수)
 const { data: monthData } = useQuery(['savingData', date.format('YYYY-MM')], () =>
 getTotalCalendarMonth(date.format('YYYY'), date.format('MM'))
);

const { data : dayData } = useQuery(['getTotalCalendarDay', date.format('YYYY-MM-DD')], () =>
getTotalCalendarDay(date.format('YYYY'), date.format('MM'), date.format('DD'))
);
  return (
    <div>
      {monthData}
      <div className="text-main text-3xl font-bold">내 습관 절약</div>
      <div className="text-xl font-semibold mt-5">총 절약 금액 : 45,000원</div>
      {/* 달력 */}
      <Calendar value={date} onSelect={onSelect} onPanelChange={onPanelChange} locale={locale}  />
      {/* 좋은 습관을 통해 하루에 아낀 돈 */}
      <OnedaySaveMoney selectedDate={selectedDate} />
      {/* 습관 생성 페이지 */}
      <div className="w-full flex justify-end">
      <Button color="blue" className="mt-5 -mb-6" onClick={()=>{navigate('/habit/create')}}>+</Button>
      </div>
      {/* 진행중 & 완료에 따른 습관 목록 띄우기 */}
      <HabitList />
      {/* 오늘의 습관 절약 */}
      <ModalSaveMoney/>
      {/* <BottomNav/> */}
    </div>
  );
};

export default HabitPage;
