import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormProps {
  loginId: string;
  password: string;
}

const schema = yup.object().shape({
  loginId: yup.string().required('아이디를 입력하세요.'),
  password: yup.string().required('비밀번호를 입력하세요.'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>아이디</label>
        <input {...register('loginId')} />
        {errors.loginId && <p>{errors.loginId.message}</p>}
      </div>
      <div>
        <label>비밀번호</label>
        <input {...register('password')} type="password" />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
