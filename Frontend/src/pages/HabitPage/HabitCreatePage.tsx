import React from 'react';
import DefaultCategory from 'components/HabitCreate/DefaultCategory';
import RepeatCategory from 'components/HabitCreate/RepeatCategory';
import { useNavigate } from 'react-router-dom';
const HabitCreatePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>습관의 제목을 입력해주세요.</h1>
      <input type="text"></input>
      <DefaultCategory />
      <RepeatCategory />
      박희창님은 지난 한 달 동안 '담배' 에 90,000원을 소비하셨어요!
      <button
        onClick={() => {
          navigate('/habit');
        }}
      >
        생성하기
      </button>
    </div>
  );
};

export default HabitCreatePage;
