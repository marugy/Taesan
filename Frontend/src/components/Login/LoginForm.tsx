import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';

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
    <div>
      <Card color="transparent" shadow={false} className="h-screen flex justify-center items-center">
        <div>
          <img src="/Main/Logo.png" className="h-36" alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="flex flex-col mb-4 gap-6">
            <div>
              <Input size="lg" label="아이디" crossOrigin="anonymous" {...register('loginId')} />
              {errors.loginId && <p className="font-thin text-sm">{errors.loginId.message}</p>}
            </div>
            <div>
              <Input size="lg" label="비밀번호" crossOrigin="anonymous" {...register('password')} />
              {errors.password && <p className="font-thin text-sm">{errors.password.message}</p>}
            </div>
          </div>
          <Checkbox
            crossOrigin="anonymous"
            label={
              <Typography variant="small" color="gray" className="flex items-center font-normal">
                자동으로 로그인하기
                <a href="#" className="font-medium transition-colors hover:text-gray-900"></a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          <Button className="mt-6 bg-sub text-lg" type="submit" fullWidth>
            로그인
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            태산 회원이 아니신가요?{' '}
            <a href="#" className="font-bold text-sub">
              회원가입
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
