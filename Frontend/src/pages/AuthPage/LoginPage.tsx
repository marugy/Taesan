import React, { useState } from 'react';
import LoginForm from 'components/Login/LoginForm';

const LoginPage = () => {
  const [form, setForm] = useState({
    id: '',
    password: '',
  });

  return (
    <div>
      <div>로그인 페이지</div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
