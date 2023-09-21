import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

interface formProps {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

interface Props {
  form: formProps;
  setForm: (value: formProps) => void;
}

const PasswordForm = ({ form, setForm }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 유효성 검사
  const [passwordValid, setPasswordValid] = useState('');

  useEffect(() => {
    if (form.newPassword && form.newPasswordConfirm && form.newPassword !== form.newPasswordConfirm) {
      setPasswordValid('비밀번호가 일치하지 않습니다.');
    } else if (form.newPassword === '' || form.newPassword === form.newPasswordConfirm) {
      setPasswordValid('');
    }
    if (form.newPassword === form.password) {
      setPasswordValid('이전 비밀번호는 사용할 수 없습니다.');
    }
  }, [form.newPassword, form.newPasswordConfirm, form.password]);

  return (
    <div className="space-y-3 flex flex-col items-center">
      <div>
        <TextField type="password" name="password" value={form.password} label="현재 비밀번호" onChange={onChange} />
      </div>
      <div>
        <TextField
          type="password"
          name="newPassword"
          value={form.newPassword}
          label="새 비밀번호"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          type="password"
          name="newPasswordConfirm"
          value={form.newPasswordConfirm}
          label="새 비밀번호 확인"
          onChange={onChange}
        />
      </div>
      <div className="text-red-500">{passwordValid ? passwordValid : ''}</div>
    </div>
  );
};

export default PasswordForm;
