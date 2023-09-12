import React, { useState } from 'react';
import PasswordForm from 'components/ChangePassword/PasswordForm';

const ChangePasswordPage = () => {
  const [form, setForm] = useState({
    password: '',
    newPassword: '',
    newPasswordConfirm: '',
  });

  return (
    <div>
      <div>비밀번호 변경 페이지</div>
      <div>🔒</div>
      <PasswordForm form={form} setForm={setForm} />
      <div>
        <button>수정하기</button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
