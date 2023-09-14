import React, { useState } from 'react';
import HabitListCompleted from './HabitListCompleted';
import HabitListProceeding from './HabitListProceeding';
import { useNavigate } from 'react-router-dom';
const HabitList = () => {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(true);
  const [isProceeding, setIsProceeding] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsCompleted(true);
          setIsProceeding(false);
        }}
      >
        완료된 습관
      </button>
      <button
        onClick={() => {
          setIsCompleted(false);
          setIsProceeding(true);
        }}
      >
        진행중인 습관
      </button>
      {isCompleted ? <HabitListCompleted /> : null}
      {isProceeding ? <HabitListProceeding /> : null}
      <button
        onClick={() => {
          navigate('/habit/create');
        }}
      >
        습관 생성하기
      </button>
    </div>
  );
};

export default HabitList;
