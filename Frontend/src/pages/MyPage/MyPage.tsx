import React from 'react';

import MyPageList from 'components/My/MyPageList';
import MyInfo from 'components/My/MyInfo';

const MyPage = () => {
  return (
    <div>
      <div>마이 페이지 홈</div>
      <MyInfo />
      <MyPageList />
    </div>
  );
};

export default MyPage;
