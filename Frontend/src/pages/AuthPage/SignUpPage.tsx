import React, { useState } from 'react';
import SignUpForm from 'components/SignUp/SignUpForm';

const SignUpPage = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfrim] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [zonecode, setZonecode] = useState('');
  const [detailPostcode, setDetailPostcode] = useState('');

  const setFormData = {
    setLoginId,
    setPassword,
    setPasswordConfrim,
    setName,
    setEmail,
    setPostcode,
    setZonecode,
    setDetailPostcode,
    setPhone,
  };

  return (
    <div>
      <div>회원가입 페이지</div>
      <SignUpForm
        email={email}
        postcode={postcode}
        zonecode={zonecode}
        detailPostcode={detailPostcode}
        setEmail={setEmail}
        setPostcode={setPostcode}
        setZonecode={setZonecode}
        setDetailPostcode={setDetailPostcode}
      />
    </div>
  );
};

export default SignUpPage;
