import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import EmailInput from './EmailInput';
import PostcodeList from './PostcodeList';

import { FormProps } from 'types/SignUpForm';

const schema = yup.object().shape({
  loginId: yup.string().required('아이디를 입력하세요.'),
  password: yup.string().required('비밀번호를 입력하세요.'),
  passwordConfirm: yup.string().required('비밀번호를 확인해주세요.'),
  name: yup.string().required('이름을 입력하세요.'),
  phone: yup.string().required('휴대폰 번호를 입력하세요.'),
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
      email,
      postcode,
      zonecode,
      detailPostcode,
    };

    console.log(completeData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>아이디</label>
        <input {...register('loginId')} />
        {errors.loginId && <span>{errors.loginId.message}</span>}
      </div>
      <div>
        <label>비밀번호</label>
        <input {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input {...register('passwordConfirm')} />
        {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
      </div>
      <div>
        <label>이름</label>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <EmailInput email={email} setEmail={setEmail} />
      </div>
      <div>
        <PostcodeList
          postcode={postcode}
          setPostcode={setPostcode}
          zonecode={zonecode}
          setZoncode={setZonecode}
          detailPostcode={detailPostcode}
          setDetailPostcode={setDetailPostcode}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default SingUpForm;
