import React, { useState } from 'react';
import EmailInput from 'components/UserModify/EmailInput';
import PostcodeList from 'components/UserModify/PostcodeList';
import { useNavigate } from 'react-router-dom';

const UserModifyPage = () => {
  const navigate = useNavigate();
  // 각 항목 State 생성
  const [email, setEmail] = useState('');
  const [postcode, setPostCode] = useState('');
  const [zonecode, setZonecode] = useState('');
  const [detailPostcode, setDeatailPostcode] = useState('');

  const handleModify = () => {
    console.log('POST_주소');
    console.log('SUCCESS -> 페이지 이동');
    navigate('/mypage');
  };

  return (
    <div>
      <div>내 정보 수정</div>
      <div>
        <input type="text" placeholder="이름 입력" />
      </div>
      <div>
        <input type="text" placeholder="0XX-XXXX-XXXX" />
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
        <button onClick={handleModify}>수정하기</button>
      </div>
    </div>
  );
};

export default UserModifyPage;
