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
    <div className="bg-back ">
      <ArrowBack pageName="내 정보 수정" />
      <div className="flex flex-col items-center mx-10 space-y-3">
        <LockOutlinedIcon
          className="text-[#8EB4B5] w-12"
          sx={{
            fontSize: {
              xs: '100px', // 모바일
              md: '200px', // 태블릿
              lg: '250px', // 데스크톱
            },
          }}
        />
        <PasswordForm form={form} setForm={setForm} />
        <div>
          <Button className="bg-[#0067AC] p-2 text-[5px] tb:text-[10px] dt:text-[20px]">수정하기</Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
