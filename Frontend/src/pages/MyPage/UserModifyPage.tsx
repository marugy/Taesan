import React, { useState } from 'react';
import EmailInput from 'components/UserModify/EmailInput';
import PostcodeList from 'components/UserModify/PostcodeList';
import { useNavigate } from 'react-router-dom';
import useFormatPhone from 'hooks/useFormatPhone';
import { Input } from '@material-tailwind/react';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import TextField from '@mui/material/TextField';
import { Button } from '@material-tailwind/react';

const UserModifyPage = () => {
  const navigate = useNavigate();
  // 각 항목 State 생성
  const [name, setName] = useState('박희창');
  const [phone, setPhone] = useFormatPhone('01068663000');
  const [email, setEmail] = useState('asdads@gmail.com');
  const [zonecode, setZonecode] = useState('62218');
  const [postcode, setPostcode] = useState('광주 광산구 하남산단6번로 107 (오선동)');
  const [detailPostcode, setDeatailPostcode] = useState('');

  const handleModify = () => {
    console.log('POST_주소');
    console.log('SUCCESS -> 페이지 이동');
    navigate('/mypage');
  };

  return (
    <div className='h-screen flex flex-col'>
      <ArrowBack pageName='정보 수정'/>
    <div className="h-screen flex justify-center items-center">
      <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input type="text" label="이름" value={name} crossOrigin="anonymous" disabled />
          <Input type="text" label="휴대폰 번호" value={phone} crossOrigin="anonymous" disabled />
          <EmailInput email={email} setEmail={setEmail} />
          <PostcodeList
            postcode={postcode}
            setPostcode={setPostcode}
            zonecode={zonecode}
            setZoncode={setZonecode}
            detailPostcode={detailPostcode}
            setDetailPostcode={setDeatailPostcode}
          />
        </div>
        <div className="flex flex-col items-center">
          <Button className="bg-[#0067AC] dt:w-24" onClick={handleModify}>
            수정하기
          </Button>
        </div>
      </div>
    </div>
    <BottomNav/>
    </div>
  );
};

export default UserModifyPage;
