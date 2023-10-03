import React, { useState,useEffect } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import HabitCalendar from 'components/Habit/HabitCalendar';
import OnedaySaveMoney from 'components/Habit/OnedaySaveMoney';
import HabitList from 'components/Habit/HabitList';
import ModalSaveMoney from 'components/Habit/ModalSaveMoney';
import { Button, select } from '@material-tailwind/react';
import BottomNav from 'components/Common/BottomNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
// 한국어로 변환
import ArrowBack from 'components/Common/ArrowBack';
import {useUserStore} from 'store/UserStore'
import Swal2 from 'sweetalert2';


const HabitPage = () => {
  const { accessToken,refreshToken,name} = useUserStore();
  const [monthData,setMonthData] = useState([
    {
        "year": 2023,
        "month": 9,
        "day": 1,
        "saving": 3000
    },
    {
        "year": 2023,
        "month": 9,
        "day": 2,
        "saving": 4000
    },
],);
  const [dayData,setDayData] = useState( [
    {
        "habitId": 1,
        "title": "금연하겠습니다",
        "habitName": "담배",
        "startDate": "2023-10-02T07:09:34",
        "saving": 3000
    },
    {
      "habitId": 1,
      "title": "금연하겠습니다",
      "habitName": "담배",
      "startDate": "2023-10-02T07:09:34",
      "saving": 3000
  },

],);

const [todaySave,setTodaySave] = useState( [
  {
      "habitId": 4,
      "habitTitle": "쇼핑",
      "targetMoney": 5500
  },
  {
    "habitId": 5,
    "habitTitle": "담배",
    "targetMoney": 4000
}
]);
  
  // 렌더링되자마자 현재 연,월의 데이터 습관 데이터 조회하기
  useEffect(()=>{
    const year = dayjs().year();
    // month랑 day는 0부터 시작해서 +1 해줘야함.
    const month = dayjs().month() + 1;
    const day = dayjs().day()+1;
    axios.get(`https:/j9c211.p.ssafy.io/api/habit-management/habits/total-calendar/${year}/${month}`,
    {headers:{
  'ACCESS-TOKEN':accessToken,
  'REFRESH-TOKEN':refreshToken,
    }},
    )
    .then(
      (response) => {
        console.log(response.data.response);
        console.log(year,month)
        setMonthData(response.data.response);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    ////////////////////////////////////
    axios.get(`https:/j9c211.p.ssafy.io/api/habit-management/habits/total-calendar/${year}/${month}/${day}`,
    {headers:{
  'ACCESS-TOKEN':accessToken,
  'REFRESH-TOKEN':refreshToken,
    }},
    )
    .then(
      (response) => {
        console.log('확인',response.data);
        setDayData(response.data.response);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    ////////////////////////////////////
    axios.get(`https://j9c211.p.ssafy.io/api/habit-management/habits/today`,
    {headers:{
  'ACCESS-TOKEN':accessToken,
  'REFRESH-TOKEN':refreshToken,
    }},
    )
    .then(
      (response) => {
        console.log(response.data);
        setTodaySave(response.data.response);
        
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    
    
  },[])
  const dateCellRender = (value: Dayjs) => {
    // 현재 날짜의 연도, 월, 일을 가져옵니다.
    const currentYear = value.year();
    const currentMonth = value.month()+1;
    const currentDay = value.date();
  
    // monthData에서 현재 연,월에 해당하는 데이터를 필터링합니다.
    const matchingData = Array.isArray(monthData) ? monthData.filter((data) => {
      return data.year === currentYear && data.month === currentMonth;
    }) : [];
  
    // 현재 날짜의 `day` 값을 찾아서 해당 `day`에 맞는 `saving` 값을 가져옵니다.
    const currentDayData = matchingData.find((data) => data.day === currentDay);
  
    // 값을 반환하도록 수정
    return (
      <div className="w-full h-full flex justify-center">
        {currentDayData ? (
                <div><img src="/Habit/check.png" className="h-7 dt:h-12 aspect-square "></img>
                <div className="hidden dt:block font-main">+
        {currentDayData.saving.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 </div></div>): ''}
      </div>
    );
  }
  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    // if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  ////////////////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();
  const [date, setDate] = useState<Dayjs>(dayjs());
  const selectedDate = date.format('YYYY년 MM월 DD일');
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    // 패널이 변경될 때(연도와 월을 바꿀 때) 연도와 월 추출
    const year = value.format('YYYY');
    const month = value.format('MM');

    axios.get(`https:/j9c211.p.ssafy.io/api/habit-management/habits/total-calendar/${year}/${month}`,
    {headers:{
  'ACCESS-TOKEN':accessToken,
  'REFRESH-TOKEN':refreshToken,
    }},
    )
    .then(
      (response) => {
        console.log(response.data);
        setMonthData(response.data.response);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    console.log(year, month);
  };

  const onSelect = (newDay: Dayjs) => {
    setDate(newDay);
    const selectYear = newDay.format('YYYY');
    const selectMonth = newDay.format('MM');
    const selectDay = newDay.format('DD');
    console.log(selectYear,selectMonth,selectDay);
    axios.get(`https:/j9c211.p.ssafy.io/api/habit-management/habits/total-calendar/${selectYear}/${selectMonth}/${selectDay}`,
    {headers:{
  'ACCESS-TOKEN':accessToken,
  'REFRESH-TOKEN':refreshToken,
    }},
    )
    .then(
      (response) => {
        console.log('일일 습관 데이터',response.data);
        setDayData(response.data.response);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
  };
  return (
    <div>
      <ArrowBack pageName="습관 절약" />
      <div className="mx-3 mt-3 mb-28 font-main">
        <div className="text-main text-4xl mt-5 font-bold font-main">나의 습관 저금</div>
        <div className="text-gray-600 text-md my-3 font-bold font-main">좋은 습관을 만들며 그동안 모은 돈을 확인해 보아요!</div>
        {/* <div className="text-gray-600 text-sm dt:text-md my-3 font-bold font-main">{name}님은 월 한 달 동안 습관 저금통에 25,000원을 저금하셨어요!</div> */}
        {/* 달력 */}
        <Calendar value={date} onSelect={onSelect} onPanelChange={onPanelChange}  cellRender={cellRender}
        />
        {/* 좋은 습관을 통해 하루에 아낀 돈 */}
        <OnedaySaveMoney selectedDate={selectedDate} dayData={dayData.length > 0 ? dayData : []} />
        {/* 습관 생성 페이지 */}
        <div className="w-full flex justify-end">
          <Button
            color="blue"
            className="mt-5 -mb-6 "
            onClick={() => {
              navigate('/habit/create');
            }}
          >
            습관 생성
          </Button>
        </div>
        {/* 진행중 & 완료에 따른 습관 목록 띄우기 */}
        <HabitList />
        {/* 오늘의 습관 절약 */}
        <ModalSaveMoney todaySave={todaySave} />
      </div>
      <BottomNav />
      <div className="h-[1vh]"></div>

    </div>
  );
};

export default HabitPage;
