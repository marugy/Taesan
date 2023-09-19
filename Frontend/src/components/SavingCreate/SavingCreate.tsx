import React from 'react';
import DatePicker from 'react-datepicker'; // 사용할 곳에서 DatePicker를 import
import 'react-datepicker/dist/react-datepicker.css'; // css파일을 불러와야 달력이 덜 못생김.
import { ko } from 'date-fns/esm/locale'; // 한국어 사용을 위해 불러오자.
const SavingCreate = () => {
  return (
    <div className="flex flex-col items-center ">
      <div>적금통 만들기</div>
      <DatePicker
        locale={ko} // 한국어로 설정
        dateFormat="yyyy년 MM월 dd일" // 날짜 형태
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫히는 옵션.
        // selected={selectedDate}
        onChange={(e) => {
          // const formattedDate = dayjs(e).format('YYYY-MM-DD');
          // setSelectDate(formattedDate); // 달력에서 날짜를 선택했을 때 선택한 날짜를 변환해서 상태에 저장
        }}
        minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
        maxDate={new Date()} // 오늘 이후는 달력에서 선택 불가능함.
        // includeDates={includeDates} // 여기에 변환한 Date 객체를 전달하면 그 Date 객체들만 달력에서 선택 가능함.
        inline // 달력이 기본적으로 보여지는 옵션 ( 기본 옵션은 인풋창을 눌러야 달력이 나옴. )
      />
      <div>만기까지 남은 일자</div>
      <div>87일 ( 2023-12-25 )</div>
    </div>
  );
};

export default SavingCreate;
