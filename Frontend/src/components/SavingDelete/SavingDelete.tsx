import React, { useState } from 'react';

const SavingDelete = () => {
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);
  return (
    <div>
      {isDeleteButtonClicked ? (
        <div>6자리 암호 띄우는 곳</div>
      ) : (
        <div>
          <h1>이지헌님의 적금통 해지하기</h1>
          <button>상세 내역</button>
          <img src="/piggy_bank.png" style={{ height: '30vh' }}></img>

          <div>현재 적금통에 적립된 금액 : 56,000원</div>
          <div>만기까지 남은 일자 : 87일(2023-12-25)</div>
          <div>중도해지시 출금액 : 56,712원</div>
          <button
            onClick={() => {
              setIsDeleteButtonClicked(true);
            }}
          >
            적금통 해지하기
          </button>
        </div>
      )}
    </div>
  );
};

export default SavingDelete;
