import React from 'react';
import ArrowBack from 'components/Common/ArrowBack';
import { Button } from '@material-tailwind/react';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useNavigate } from 'react-router-dom';

const UserDeletePage = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken, name } = useUserStore();

  const handleDeleteUser = () => {
    Swal.fire({
      title: `회원님의 이름을 입력하세요.`,
      icon: 'question',
      input: 'text',

      confirmButtonColor: 'red',
      confirmButtonText: '회원탈퇴',

      showCancelButton: true,
      cancelButtonColor: 'black',
      cancelButtonText: '취소',

      inputValidator: (value) => {
        if (!value || value !== name) {
          return '잘못된 입력입니다!!';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value === name) {
          axios
            .delete(`https://j9c211.p.ssafy.io/api/member-management/members`, {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            })
            .then((res) => {
              navigate('/');
              Toast.fire({
                icon: 'success',
                title: '회원탈퇴했습니다.',
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-10 space-y-3">
      <Button className="bg-red-500" onClick={handleDeleteUser}>
        탈퇴하기
      </Button>
    </div>
  );
};

export default UserDeletePage;
