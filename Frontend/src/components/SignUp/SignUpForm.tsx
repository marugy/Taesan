import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';

import EmailInput from './EmailInput';
import PostcodeList from './PostcodeList';

import { FormProps } from 'types/SignUpForm';

const schema = yup.object().shape({
  loginId: yup.string().required('아이디를 입력하세요.'),
  password: yup.string().required('비밀번호를 입력하세요.'),
  passwordConfirm: yup.string().required('비밀번호를 확인해주세요.'),
  name: yup.string().required('이름을 입력하세요.'),
  phone: yup.string().required('휴대폰 번호를 입력하세요.'),
  email: yup.string().required('이메일을 입력하세요.'),
});

const SingUpForm = ({
  email,
  setEmail,
  postcode,
  zonecode,
  detailPostcode,
  setPostcode,
  setZonecode,
  setDetailPostcode,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormProps) => {
    const completeData = {
      ...data,
      postcode,
      zonecode,
      detailPostcode,
    };

    console.log(data);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-2xl tb:text-3xl dt:text-4xl mb-5">회원가입</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4 gap-6">
          <Input size="lg" label="아이디" crossOrigin="anonymous" {...register('loginId')} />
          {errors.loginId && <span>{errors.loginId.message}</span>}
          <Input size="lg" label="비밀번호" crossOrigin="anonymous" {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
          <Input size="lg" label="비밀번호 확인" crossOrigin="anonymous" {...register('passwordConfirm')} />
          {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
          <Input size="lg" label="이름" crossOrigin="anonymous" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
          <EmailInput email={email} setEmail={setEmail} />
          <PostcodeList
            postcode={postcode}
            setPostcode={setPostcode}
            zonecode={zonecode}
            setZoncode={setZonecode}
            detailPostcode={detailPostcode}
            setDetailPostcode={setDetailPostcode}
          />
        </div>
        <Button className="mt-6 bg-sub text-lg" type="submit" fullWidth>
          회원가입
        </Button>
      </form>
    </div>
  );
};

export default SingUpForm;
