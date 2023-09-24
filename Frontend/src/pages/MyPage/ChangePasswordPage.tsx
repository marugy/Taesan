import React, { useState } from 'react';
import PasswordForm from 'components/ChangePassword/PasswordForm';
import ArrowBack from 'components/Common/ArrowBack';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from '@material-tailwind/react';

const ChangePasswordPage = () => {
  const [form, setForm] = useState({
    password: '',
    newPassword: '',
    newPasswordConfirm: '',
  });

  return (
    <div className="h-screen justify-center flex flex-col items-center mx-10 space-y-3 ">
      <LockOutlinedIcon
        className="text-[#8EB4B5] w-12"
        sx={{
          fontSize: {
            xs: '10rem', // 모바일
            md: '20rem', // 태블릿
            lg: '30rem', // 데스크톱
          },
        }}
      />
      <PasswordForm form={form} setForm={setForm} />
      <div>
        <Button className="bg-[#0067AC] p-2 text-[5px] tb:text-[10px] dt:text-[20px]">수정하기</Button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
