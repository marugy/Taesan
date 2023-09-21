import React from 'react';
import ArrowBack from 'components/Common/ArrowBack';
import { Button } from '@material-tailwind/react';

const UserDeletePage = () => {
  return (
    <div className="bg-back">
      <ArrowBack pageName="회원탈퇴" />
      <div className="flex flex-col items-center mx-10 space-y-3">
        <Button className="bg-red-500">탈퇴하기</Button>
      </div>
    </div>
  );
};

export default UserDeletePage;
