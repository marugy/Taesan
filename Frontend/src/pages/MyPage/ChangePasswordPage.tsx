import React, { useState,useEffect } from 'react';
import PasswordForm from 'components/ChangePassword/PasswordForm';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'components/Common/Toast';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';

const ChangePasswordPage = () => {
  const { accessToken, refreshToken } = useUserStore();
  const [form, setForm] = useState({
    password: '',
    newPassword: '',
    newPasswordConfirm: '',
  });
  const navigate = useNavigate();
  const tokenCheck = ()=>{
    axios.post('https://j9c211.p.ssafy.io/api/member-management/members/check/access-token',{},{
      headers: {
        'ACCESS-TOKEN': accessToken,
        'REFRESH-TOKEN': refreshToken,
      },
    })
    .then((res)=>{

      if(res.data.response === false){
        navigate('/')
      }
    })
    .catch((err)=>{
      console.log(err)
      navigate('/')
    })
  }
  useEffect(() => {
    tokenCheck();
  }, []);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = () => {
    if (form.password && form.newPassword && form.newPasswordConfirm && form.newPassword === form.newPasswordConfirm) {
      axios
        .post(
          `https://j9c211.p.ssafy.io/api/auth-management/auths/password/check`,
          {
            password: form.password,
          },
          {
            headers: {
              'ACCESS-TOKEN': accessToken,
              'REFRESH-TOKEN': refreshToken,
            },
          },
        )
        .then((res) => {
          console.log(res.data.response);
          if (!res.data.response) {
            setErrorMessage('비밀번호를 틀렸습니다.');
          } else {
            setErrorMessage('');
            axios
              .put(
                `https://j9c211.p.ssafy.io/api/member-management/members/password`,
                {
                  password: form.newPassword, // 새로운 비밀번호로 업데이트
                },
                {
                  headers: {
                    'ACCESS-TOKEN': accessToken,
                    'REFRESH-TOKEN': refreshToken,
                  },
                },
              )
              .then(() => {
                Toast.fire({
                  icon: 'success',
                  title: '수정했습니다!',
                });
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (!form.password || !form.newPassword || !form.newPasswordConfirm) {
      setErrorMessage('빈칸을 입력해주세요.');
    }
  };

  return (
    <div className="h-screen flex flex-col ">
      <ArrowBack pageName="비밀번호 변경" />
      <div className="justify-center flex flex-col items-center mx-10 space-y-3 my-24">
        <LockOutlinedIcon
          className="text-[#8EB4B5] w-12"
          sx={{
            fontSize: {
              xs: '10rem', // 모바일
              md: '20rem', // 태블릿
              lg: '30rem', // 데스크톱
            },
          }}
        />
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <PasswordForm form={form} setForm={setForm} />
        <div className="flex flex-col justify-center items-center">
          <Button className="bg-[#0067AC] p-2 text-xl tb:text-xl dt:text-2xl" onClick={handleChangePassword}>
            수정하기
          </Button>
        </div>
        <div className="h-[120px]"></div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ChangePasswordPage;
