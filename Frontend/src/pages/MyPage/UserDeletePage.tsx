import React from 'react';
import ArrowBack from 'components/Common/ArrowBack';
import { Button } from '@material-tailwind/react';

const UserDeletePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center mx-10 space-y-3">
      <Button className="bg-red-500">탈퇴하기</Button>
    </div>
  );
};

export default UserDeletePage;
