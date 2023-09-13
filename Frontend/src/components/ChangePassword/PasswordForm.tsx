import React, { useEffect, useState } from 'react';
import { StyledWarningText } from './PasswordFromStyles';

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

  const [sameNewPassword, setSameNewPassword] = useState(true);

  // 유효성 검사
  useEffect(() => {
    if (form.newPassword && form.newPassword !== form.newPasswordConfirm) {
      setSameNewPassword(false);
    } else if (form.newPassword === '' || form.newPassword === form.newPasswordConfirm) {
      setSameNewPassword(true);
    }
  }, [form.newPassword, form.newPasswordConfirm]);

  return (
    <div>
      <div>
        <input type="password" name="password" value={form.password} placeholder="현재 비밀번호" onChange={onChange} />
      </div>
      <div>
        <input
          type="password"
          name="newPassword"
          value={form.newPassword}
          placeholder="새 비밀번호"
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="newPasswordConfirm"
          value={form.newPasswordConfirm}
          placeholder="새 비밀번호 확인"
          onChange={onChange}
        />
        <StyledWarningText>{sameNewPassword ? null : '비밀번호가 일치하지 않습니다.'}</StyledWarningText>
      </div>
    </div>
  );
};

export default PasswordForm;
