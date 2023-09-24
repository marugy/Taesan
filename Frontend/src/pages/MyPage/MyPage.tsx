import React from 'react';

import MyPageList from 'components/My/MyPageList';
import MyInfo from 'components/My/MyInfo';
import ArrowBack from 'components/Common/ArrowBack';

const MyPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center mx-10">
      <MyInfo />
      <MyPageList />
    </div>
  );
};

export default MyPage;
