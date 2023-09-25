import React from 'react';

import MyPageList from 'components/My/MyPageList';
import MyInfo from 'components/My/MyInfo';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
const MyPage = () => {
  return (
    <div className='flex flex-col h-screen'>
    <ArrowBack pageName='내 정보'/>
    <div className="flex-col justify-center mx-10 my-24">
      <MyInfo />
      <MyPageList />
      <BottomNav/>
    </div>
    </div>
  );
};

export default MyPage;
