import React, { useEffect, useState } from 'react';
import EmailInput from 'components/UserModify/EmailInput';
import PostcodeList from 'components/UserModify/PostcodeList';
import { useNavigate } from 'react-router-dom';
import useFormatPhone from 'hooks/useFormatPhone';
import { Input } from '@material-tailwind/react';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import { Button } from '@material-tailwind/react';

import { Toast } from 'components/Common/Toast';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';

const UserModifyPage = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useUserStore();

  // 각 항목 State 생성
  const [name, setName] = useState('');
  const [phone, setPhone] = useFormatPhone('');
  const [email, setEmail] = useState('');
  const [zonecode, setZonecode] = useState('');
  const [postcode, setPostcode] = useState('');
  const [detailPostcode, setDeatailPostcode] = useState('');

  useEffect(() => {
    axios
      .get(`https://j9c211.p.ssafy.io/api/member-management/members/info`, {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((res) => {
        const userData = res.data.response;
        setName(userData.name);
        setPhone(userData.phone);
        setEmail(userData.email);
        setZonecode(userData.address['zipCode']);
        setPostcode(userData.address['address']);
        setDeatailPostcode(userData.address['addressDetail']);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleModify = () => {
    axios
      .put(
        `https://j9c211.p.ssafy.io/api/member-management/members/info`,
        {
          email: email,
          address: {
            address: postcode,
            addressDetail: detailPostcode,
            zipCode: zonecode,
          },
        },
        {
          headers: {
            'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        },
      )
      .then((res) => {
        Toast.fire({
          icon: 'success',
          title: '수정했습니다!',
        });
        navigate('/mypage/usermodify');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen flex flex-col">
      <ArrowBack pageName="정보 수정" />
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
      <BottomNav />
    </div>
  );
};

export default UserModifyPage;
