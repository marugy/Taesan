import React from 'react';

import MyPageList from 'components/My/MyPageList';
import MyInfo from 'components/My/MyInfo';
import ArrowBack from 'components/Common/ArrowBack';

const MyPage = () => {
  return (
    <div className="bg-back ">
      <ArrowBack pageName="마이페이지" />
      <div className="flex flex-col mx-10">
        <MyInfo />
        <MyPageList />
      </div>
    </div>
  );
};

export default MyPage;
