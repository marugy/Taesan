import React from 'react';
import AccountList from 'components/ChangeAccount/AccountList';

const ChangeAccountPage = () => {
  return (
    <div>
      <div>등록계좌변경 페이지</div>
      <AccountList />
      <button>다음</button>
      <div>다음을 누르면 계좌 변경 API 보내고 완료 페이지 보여주기</div>
    </div>
  );
};

export default ChangeAccountPage;
