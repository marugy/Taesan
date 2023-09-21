import React, { useState } from 'react';
import EmailInput from 'components/UserModify/EmailInput';
import PostcodeList from 'components/UserModify/PostcodeList';
import { useNavigate } from 'react-router-dom';
import useFormatPhone from 'hooks/useFormatPhone';

import ArrowBack from 'components/Common/ArrowBack';
import TextField from '@mui/material/TextField';
import { Button } from '@material-tailwind/react';

const UserModifyPage = () => {
  const navigate = useNavigate();
  // 각 항목 State 생성
  const [name, setName] = useState('박희창');
  const [phone, setPhone] = useFormatPhone('01068663000');
  const [email, setEmail] = useState('');
  const [postcode, setPostCode] = useState('');
  const [zonecode, setZonecode] = useState('');
  const [detailPostcode, setDeatailPostcode] = useState('');

  const formatPhone = (phoneStr: string) => {
    const cleaned = phoneStr.replace(/\D/g, '');

    if (cleaned.length === 10) {
      return `${cleaned.substring(0, 2)}-${cleaned.substring(2, 5)}-${cleaned.substring(5)}`;
    } else if (cleaned.length === 11) {
      if (cleaned.charAt(0) === '0' && cleaned.charAt(1) !== '2') {
        // 예: 010-xxxx-xxxx 형식
        return `${cleaned.substring(0, 3)}-${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
      }
    } else if (cleaned.length === 12) {
      return `${cleaned.substring(0, 3)}-${cleaned.substring(3, 7)}-${cleaned.substring(7)}`;
    }
    return null;
  };

  const handleModify = () => {
    console.log('POST_주소');
    console.log('SUCCESS -> 페이지 이동');
    navigate('/mypage');
  };

  return (
    <div className="bg-back ">
      <ArrowBack pageName="내 정보 수정" />
      <div className="ml-10 space-y-3 ">
        <div>
          <TextField type="text" label="이름" value={name} disabled />
        </div>
        <div>
          <TextField type="text" label="휴대폰 번호" value={phone} disabled />
        </div>
        <div>
          <EmailInput email={email} setEmail={setEmail} />
        </div>
        <div>
          <PostcodeList
            postcode={postcode}
            setPostCode={setPostCode}
            zonecode={zonecode}
            setZonCode={setZonecode}
            detailPostcode={detailPostcode}
            setDetailPostcode={setDeatailPostcode}
          />
        </div>
        <div>
          <Button className="bg-main" onClick={handleModify}>
            수정하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserModifyPage;
