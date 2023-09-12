import React from 'react';
import { useNavigate } from 'react-router-dom';
const SavingInfo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>이지헌님의 적금통 조회하기</h1>
      <button
        onClick={() => {
          navigate('/saving/detail');
        }}
      >
        상세 내역
      </button>
      <img src="/piggy_bank.png" style={{ height: '30vh' }}></img>
      <div>현재 적금통에 적립된 금액 : 56,000원</div>
      <div>만기까지 남은 일자 : 87일(2023-12-25)</div>
      <div>만기시 예상 출금액 : 56,712원</div>
      <button
        onClick={() => {
          navigate('/saving/delete');
        }}
      >
        적금통 해지하기
      </button>
      <button>홈 화면 가기</button>
    </div>
  );
};

export default SavingInfo;
