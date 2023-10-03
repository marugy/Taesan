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

      confirmButtonColor: '#ef4444',
      confirmButtonText: '확인',

      showCancelButton: true,
      cancelButtonColor: '#64748b',
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
    <div className="dt:mx-32 dt:space-y-20">
      <div className="dt:flex dt:gap-5 ">
        <Button
          className="flex items-center justify-between p-2 border rounded bg-white w-full h-16 dt:h-40 dt:flex-col dt:justify-center dt:items-center"
          onClick={() => navigate('/mypage/usermodify')}
        >
          <div className="flex items-center space-x-3 dt:flex-col">
            <AccountBoxOutlinedIcon
              className="text-[#8EB4B5] "
              sx={{
                fontSize: {
                  xs: '30px', // 모바일
                  md: '50px', // 태블릿
                  lg: '100px', // 데스크톱
                },
              }}
            />
            <div className="text-gray-700 tb:text-sm dt:text-xl">내 정보 수정</div>
          </div>
          <div className="dt:hidden">
            <ArrowForwardOutlinedIcon className="text-gray-500" />
          </div>
        </Button>
        <Button
          className="flex items-center justify-between p-2 border rounded bg-white w-full h-16 dt:h-40 dt:flex-col dt:justify-center dt:items-center"
          onClick={() => navigate('/mypage/password')}
        >
          <div className="flex items-center space-x-3 dt:flex-col">
            <PasswordOutlinedIcon
              className="text-[#8EB4B5] "
              sx={{
                fontSize: {
                  xs: '30px', // 모바일
                  md: '50px', // 태블릿
                  lg: '100px', // 데스크톱
                },
              }}
            />
            <div className="text-gray-700 tb:text-sm dt:text-xl">계정 비밀번호 변경</div>
          </div>

          <div className="dt:hidden">
            <ArrowForwardOutlinedIcon className="text-gray-500 " />
          </div>
        </Button>
        <Button
          className="flex items-center justify-between p-2 border rounded bg-white w-full h-16 dt:h-40 dt:flex-col dt:justify-center dt:items-center"
          onClick={() => navigate('/mypage/pincode')}
        >
          <div className="flex items-center space-x-3 dt:flex-col">
            <FiberPinOutlinedIcon
              className="text-[#8EB4B5] "
              sx={{
                fontSize: {
                  xs: '30px', // 모바일
                  md: '50px', // 태블릿
                  lg: '100px', // 데스크톱
                },
              }}
            />
            <div className="text-gray-700 tb:text-sm dt:text-xl">간편 비밀번호 변경</div>
          </div>
          <div className="dt:hidden">
            <ArrowForwardOutlinedIcon className="text-gray-500" />
          </div>
        </Button>
      </div>

      <div className="dt:flex dt:gap-5">
        <Button
          className="flex items-center justify-between p-2 border rounded bg-white w-full h-16 dt:h-40 dt:flex-col dt:justify-center dt:items-center"
          onClick={() => navigate('/mypage/product')}
        >
          <div className="flex items-center space-x-3 dt:flex-col">
            <HelpOutlineOutlinedIcon
              className="text-[#8EB4B5] "
              sx={{
                fontSize: {
                  xs: '30px', // 모바일
                  md: '50px', // 태블릿
                  lg: '100px', // 데스크톱
                },
              }}
            />
            <div className="text-gray-700 tb:text-sm dt:text-xl">적금 상품 정보</div>
          </div>
          <div className="dt:hidden">
            <ArrowForwardOutlinedIcon className="text-gray-500" />
          </div>
        </Button>
        <Button
          className="flex items-center justify-between p-2 border rounded bg-white w-full h-16 dt:h-40 dt:flex-col dt:justify-center dt:items-center"
          onClick={() => navigate('/mypage/account')}
        >
          <div className="flex items-center space-x-3 dt:flex-col">
            <AccountBalanceWalletOutlinedIcon
              className="text-[#8EB4B5] "
              sx={{
                fontSize: {
                  xs: '30px', // 모바일
                  md: '50px', // 태블릿
                  lg: '100px', // 데스크톱
                },
              }}
            />
            <div className="text-gray-700 tb:text-sm dt:text-xl">내 계좌 변경</div>
          </div>
          <div className="dt:hidden">
            <ArrowForwardOutlinedIcon className="text-gray-500" />
          </div>
        </Button>
        <Button
          className="flex items-center justify-between p-2 border rounded bg-white w-full h-16 dt:h-40 dt:flex-col dt:justify-center dt:items-center"
          onClick={() => navigate('/mypage/userdelete')}
        >
          <div className="flex items-center space-x-3 dt:flex-col">
            <PersonRemoveOutlinedIcon
              className="text-[#8EB4B5] "
              sx={{
                fontSize: {
                  xs: '30px', // 모바일
                  md: '50px', // 태블릿
                  lg: '100px', // 데스크톱
                },
              }}
            />
            <div className="text-gray-700 tb:text-sm dt:text-xl">회원 탈퇴</div>
          </div>
          <div className="dt:hidden">
            <ArrowForwardOutlinedIcon className="text-gray-500" />
          </div>
        </Button>
        <Button
          className="flex items-center justify-between p-2 border rounded bg-white w-full h-16 dt:h-40 dt:flex-col dt:justify-center dt:items-center"
          onClick={handleLogout}
        >
          <div className="flex items-center space-x-3 dt:flex-col">
            <LogoutOutlinedIcon
              className="text-[#8EB4B5] "
              sx={{
                fontSize: {
                  xs: '30px', // 모바일
                  md: '50px', // 태블릿
                  lg: '100px', // 데스크톱
                },
              }}
            />
            <div className="text-red-500 tb:text-sm dt:text-xl">로그아웃</div>
          </div>
          <div className="dt:hidden">
            <ArrowForwardOutlinedIcon className="text-gray-500" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default MyPageList;
