import React, { useState } from 'react';
import SignUpForm from 'components/SignUp/SignUpForm';
import ArrowBackParam from 'components/Common/ArrowBackParam';

const SignUpPage = () => {
  return (
    <div>
      <ArrowBackParam pageName="회원가입" param="/" />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
