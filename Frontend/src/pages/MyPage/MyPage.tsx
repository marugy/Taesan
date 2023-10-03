import React from 'react';

import MyPageList from 'components/My/MyPageList';
import MyInfo from 'components/My/MyInfo';
import ArrowBackParam from 'components/Common/ArrowBackParam';
import BottomNav from 'components/Common/BottomNav';
import { useUserStore } from 'store/UserStore';
const MyPage = () => {
  const { name } = useUserStore();
  return (
    <div className="flex flex-col dt:w-screen dt:h-screen dt:fixed dt:top-5 dt:left-5">
      <ArrowBackParam pageName="내 정보" param="/main" />
      <div className="flex-col justify-center mt-7 dt:space-y-20">
        <MyInfo name={name} />
        <MyPageList />
        <div className="h-[80px]"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default MyPage;
