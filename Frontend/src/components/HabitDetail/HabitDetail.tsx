
import React, { useState,useEffect } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { CalendarProps } from 'antd';
import {  Calendar } from 'antd';
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
import { useParams} from 'react-router-dom';
import Swal2 from 'sweetalert2'
const HabitDetail = () => {
    const { habitId } = useParams<{ habitId: string }>();
    const { accessToken,refreshToken} = useUserStore();
  const [detailMonthData,setDetailMonthData] = useState([
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
  const [detailData,setDetailData] = useState( 
    {
        "success": true,
        "response": {
            "habitId": 1,
            "title": "금연하겠습니다",
            "habitName": "담배",
            "startDate": "2023-10-02T09:22:53",
            "saving": 0,
            "endDate": "2023-10-02T00:23:23.12489"
        },
        "error": null
    }
  );
  
// 습관 중단하는 함수
const stopHabit = () => {
    axios.put(`https://j9c211.p.ssafy.io/api/habit-management/habits/progress/${habitId}`, {
        // 여기에 객체 속성과 값을 추가하세요
      }, {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then(response => {
        console.log('습관삭제성공함')
        console.log(response.data)
        Swal2.fire({
            icon: 'success',
            title: '습관을 성공적으로 삭제했습니다.',
          }); 
        navigate('/habit')
        
      })
      .catch(error => {
        console.log(error);
        Swal2.fire({
            icon: 'info',
            title: '습관 삭제에 실패했습니다.',
          }); 

      });
}
  
  // 렌더링되자마자 현재 연,월의 습관 상세 데이터 조회하기
  useEffect(()=>{
    const year = dayjs().year();
    // month는 0부터 시작해서 +1 해줘야함.
    const month = dayjs().month() + 1;
    const day = dayjs().day();
    axios.get(`https:/j9c211.p.ssafy.io/api/habit-management/habits/${habitId}/calendars/${year}/${month}`,
    {headers:{
  'ACCESS-TOKEN':accessToken,
  'REFRESH-TOKEN':refreshToken,
    }},
    )
    .then(
      (response) => {
        console.log('습관상세 달력 데이터',response.data);
        console.log(year,month)
        setDetailMonthData(response.data);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    //////////
    axios.get(`https:/j9c211.p.ssafy.io/api/habit-management/habits/${habitId}`,
    {headers:{
  'ACCESS-TOKEN':accessToken,
  'REFRESH-TOKEN':refreshToken,
    }},
    )
    .then(
      (response) => {
        console.log('습관상세데이터',response.data);
        setDetailData(response.data);
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
    const matchingData = Array.isArray(detailMonthData) ? detailMonthData.filter((data) => {
      return data.year === currentYear && data.month === currentMonth;
    }) : [];
  
    // 현재 날짜의 `day` 값을 찾아서 해당 `day`에 맞는 `saving` 값을 가져옵니다.
    const currentDayData = matchingData.find((data) => data.day === currentDay);
  
    // 값을 반환하도록 수정
    return (
      <div className="w-full h-full flex justify-center">
        {currentDayData ? (
                <div><img src="/Habit/check.png" className="h-7 dt:h-12 "></img>
                <div className="hidden dt:block font-main">
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
        setDetailMonthData(response.data);
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
  };
 
  return (
    <div>

      <ArrowBack pageName="습관 절약" />
      <div className="mx-3 mt-3 mb-28">
        <div className="text-main text-3xl font-extrabold font-main">{detailData.response.habitName } 습관 절약</div>
        {/* 달력 */}
        <Calendar value={date}  onPanelChange={onPanelChange} onSelect={onSelect} cellRender={cellRender}
        />
        <div>시작일 : {dayjs(detailData.response.startDate).format('YYYY년 MM월 DD일')}</div>
        { detailData.response.endDate !== null ? <div>종료일 : {dayjs(detailData.response.endDate).format('YYYY년 MM월 DD일')}</div> : <div><Button color="blue" onClick={stopHabit}>습관 중단하기</Button></div> }
      </div>
      <BottomNav />
    </div>
  );
};



export default HabitDetail;

///

