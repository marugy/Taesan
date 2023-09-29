import React, { useState } from 'react';
// import DatePicker from 'react-datepicker'; // 사용할 곳에서 DatePicker를 import
import 'react-datepicker/dist/react-datepicker.css'; // css파일을 불러와야 달력이 덜 못생김.
import { ko } from 'date-fns/esm/locale'; // 한국어 사용을 위해 불러오자.
import dayjs from 'dayjs';
import { Button } from '@material-tailwind/react';

/// MUI 데이트 피커

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// 리액트 DatePicker 보다는 RangePicker가 맞을듯.
const SavingCreate = () => {
  const [date, setDate] = useState('2023-09-20'); // 선택한 날짜를 상태로 저장
  const koreanDate = dayjs(date).format('YYYY년 MM월 DD일'); //

  const today = dayjs(); // 오늘 날짜
  const duration = dayjs(date).diff(today, 'day') + 1; // 오늘과 만기일 사이의 날짜 차이
  return (
    <div className="flex flex-col items-center bg-[url('/Card1.png') ">
      <div className="font-extrabold text-3xl mt-10 text-main">새 적금통 만들기</div>
      <div>
        <img className="h-64" src="/piggy_bank.png" alt="" />
      </div>

      {/* MUI 달력 */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="만기일을 선택해주세요."
            disablePast={true}
            format="YYYY년 MM월 DD일"
            onChange={(newDate: dayjs.Dayjs | null) => {
              if (newDate) {
                setDate(newDate.format('YYYY-MM-DD'));
              }
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      {/* <DatePicker
        locale={ko} // 한국어로 설정
        dateFormat="yyyy년 MM월 dd일" // 날짜 형태
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫히는 옵션.
        selected={new Date()} // 해당 날짜가 달력에서 선택됨.
        startDate={new Date()} // 시작일
        endDate={new Date()} // 종료일
        // selectsRange={true}
        onChange={(e) => {
          const formattedDate = dayjs(e).format('YYYY-MM-DD');
          setSelectDate(formattedDate);
        }}
        minDate={new Date()} // minDate 이전 날짜 선택 불가
        // maxDate={new Date()} // 오늘 이후는 달력에서 선택 불가능함.
        // includeDates={includeDates} // 여기에 변환한 Date 객체를 전달하면 그 Date 객체들만 달력에서 선택 가능함.
        inline // 달력이 기본적으로 보여지는 옵션 ( 기본 옵션은 인풋창을 눌러야 달력이 나옴. )
      /> */}
      {/* <div>만기일 : {koreanDate}</div> */}
      <div className="my-8 text-lg font-bold">만기까지 남은 일자 : {duration}일 </div>
      <Button className="bg-main">적금통 만들기</Button>
    </div>
  );
};

export default SavingCreate;
