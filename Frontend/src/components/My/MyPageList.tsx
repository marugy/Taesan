import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@material-tailwind/react';

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import FiberPinOutlinedIcon from '@mui/icons-material/FiberPinOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';

const MyPageList = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken, setAccessToken, setRefreshToken, setName } = useUserStore();

  const handleLogout = () => {
    Swal.fire({
      title: '로그아웃',
      html: `로그아웃하시겠습니까?`,
      icon: 'question',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '확인',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`https://j9c211.p.ssafy.io/api/member-management/members/logout`, {
            headers: {
              'ACCESS-TOKEN': accessToken,
              'REFRESH-TOKEN': refreshToken,
            },
          })
          .then((res) => {
            console.log(res);
            setAccessToken('');
            setRefreshToken('');
            setName('');
            navigate('/');
            Toast.fire({
              icon: 'success',
              title: '로그아웃했습니다!',
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div className="space-y-5">
      <Button
        className="flex items-center justify-between p-2 border rounded-xl bg-white w-full h-14"
        onClick={() => navigate('/mypage/usermodify')}
      >
        <div className="flex items-center space-x-3">
          <AccountBoxOutlinedIcon className="text-[#8EB4B5]" />
          <div className="text-gray-700 tb:text-sm dt:text-xl">내 정보 수정</div>
        </div>
        <ArrowForwardOutlinedIcon className="text-gray-500" />
      </Button>

      <Button
        className="flex items-center justify-between p-2 border rounded-xl bg-white w-full h-14"
        onClick={() => navigate('/mypage/password')}
      >
        <div className="flex items-center space-x-3">
          <PasswordOutlinedIcon className="text-[#8EB4B5] " />
          <div className="text-gray-700 tb:text-sm dt:text-xl">계정 비밀번호 변경</div>
        </div>
        <ArrowForwardOutlinedIcon className="text-gray-500" />
      </Button>

      <Button
        className="flex items-center justify-between p-2 border rounded-xl bg-white w-full h-14"
        onClick={() => navigate('/mypage/pincode')}
      >
        <div className="flex items-center space-x-3">
          <FiberPinOutlinedIcon className="text-[#8EB4B5] " />
          <div className="text-gray-700 tb:text-sm dt:text-xl">간편 비밀번호 변경</div>
        </div>
        <ArrowForwardOutlinedIcon className="text-gray-500" />
      </Button>
      <Button
        className="flex items-center justify-between p-2 border rounded-xl bg-white w-full h-14"
        onClick={() => navigate('/mypage/product')}
      >
        <div className="flex items-center space-x-3">
          <HelpOutlineOutlinedIcon className="text-[#8EB4B5] " />
          <div className="text-gray-700 tb:text-sm dt:text-xl">적금 상품 정보</div>
        </div>
        <ArrowForwardOutlinedIcon className="text-gray-500" />
      </Button>
      <Button
        className="flex items-center justify-between p-2 border rounded-xl bg-white w-full h-14"
        onClick={() => navigate('/mypage/account')}
      >
        <div className="flex items-center space-x-3">
          <AccountBalanceWalletOutlinedIcon className="text-[#8EB4B5] " />
          <div className="text-gray-700 tb:text-sm dt:text-xl">내 계좌 변경</div>
        </div>
        <ArrowForwardOutlinedIcon className="text-gray-500" />
      </Button>

      <Button
        className="flex items-center justify-between p-2 border rounded-xl bg-white w-full h-14"
        onClick={() => navigate('/mypage/userdelete')}
      >
        <div className="flex items-center space-x-3">
          <PersonRemoveOutlinedIcon className="text-[#8EB4B5] " />
          <div className="text-gray-700 tb:text-sm dt:text-xl">회원 탈퇴</div>
        </div>
        <ArrowForwardOutlinedIcon className="text-gray-500" />
      </Button>

      <Button
        className="flex items-center justify-between p-2 border rounded-xl bg-white w-full h-14"
        onClick={handleLogout}
      >
        <div className="flex items-center space-x-3">
          <LogoutOutlinedIcon className="text-[#8EB4B5] " />
          <div className="text-red-500 tb:text-sm dt:text-xl">로그아웃</div>
        </div>
        <ArrowForwardOutlinedIcon className="text-gray-500" />
      </Button>
    </div>
  );
};

export default MyPageList;
