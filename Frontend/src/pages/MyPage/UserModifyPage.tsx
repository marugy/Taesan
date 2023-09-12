import React, { useState } from 'react';
import EmailInput from 'components/My/EmailInput';

const UserModifyPage = () => {
  // 각 항목 State 생성
  // 사용자 정보 조회 후 State 저장
  // value = State

  return (
    <div>
      <div>내 정보 수정</div>
      <div>
        <div>이름</div>
        <input type="text" placeholder="이름 입력" />
      </div>
      <div>
        <div>휴대폰 번호</div>
        <input type="text" placeholder="0XX-XXXX-XXXX" />
      </div>
      <EmailInput />
    </div>
  );
};

export default UserModifyPage;
