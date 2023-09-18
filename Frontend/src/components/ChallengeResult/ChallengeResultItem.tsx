import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengeResultItem = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('해당 절약챌린지 아낀 금액 : Prop 이체 페이지 넘기기');
  };

  return (
    <div>
      <div>제목 : 메롱</div>
      <div>기간 : 12일</div>
      <div>목표소비금액 : ￦100,000원</div>
      <div>남은 금액 : ￦30,000원</div>
      {/* 이미 환전한 항목은 비활성화 */}
      <button onClick={() => navigate('/challenge/result/detail')}>자세히 보기</button>
      <button onClick={handleSave}>아낀 금액 환전</button>
    </div>
  );
};

export default ChallengeResultItem;
