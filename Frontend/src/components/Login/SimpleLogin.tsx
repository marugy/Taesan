import { Button } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';

import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import ArrowBackPincode from 'components/Common/ArrowBackPincode';

const MAX_LENGTH = 6;

interface Props {
  onCorrectPincode: () => void;
  visibleFalse: () => void;
}

export const Pincode = ({ onCorrectPincode, visibleFalse }: Props) => {
  const navigate = useNavigate();
  const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useUserStore();

  const [simplePassword, setSimplePassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  // 입력한 PinCode 값
  const [stack, setStack] = useState<string[]>([]);

  // 숫자 입력
  const handlePushPin = (pin: string) => {
    if (stack.length < MAX_LENGTH) {
      setStack([...stack, pin]);
    }
  };

  // 숫자 제거
  const handlePopPin = () => {
    setStack(stack.slice(0, -1));
  };

  // 숫자 초기화
  const handleReset = () => {
    setStack([]);
  };

  const handleConfirmPincode = () => {
    axios
      .post(
        'https://j9c211.p.ssafy.io/api/member-management/members/simple-login',
        {
          simplePassword: stack.join(''),
        },
        {
          headers: {
            // 'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        },
      )
      .then((res) => {
        // 간편로그인 시 AT,RT 갱신
        console.log('심플로그인 갱신', res.data);

        if (res.data.response) {
          onCorrectPincode(); // onPincode는 상위 컴포넌트로 핀코드 뷰를 닫는 함수가 있어야 함
          setAccessToken(res.data.response.accessToken);
          setRefreshToken(res.data.response.refreshToken);
          console.log('ads', res);
          navigate('/main');
        } else {
          setErrorMessage('잘못된 입력입니다.');
          setStack([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // 핀코드가 MAX_LENGTH에 도달했는지 확인
    if (stack.length === MAX_LENGTH) {
      handleConfirmPincode();
      setErrorMessage('');
    }
  }, [stack]);

  const handleClose = () => {
    setStack([]);
    visibleFalse();
  };

  return (
    <div
      className={`flex inset-0 justify-center items-center fixed h-screen  w-full z-40 flex-col bg-back  mt-5 ${
        errorMessage ? 'animate-shake' : ''
      }`}
    >
      <ArrowBackPincode pageName="뒤로가기" handleClose={handleClose} />

      <div className="text-[#0067AC] flex justify-center text-2xl tb:text-3xl dt:text-4xl font-bold mb-10">
        암호 입력
      </div>

      <div className="flex justify-center space-x-5 text-[#0067AC] mb-5  ">
        {Array.from({ length: MAX_LENGTH }).map((_, index) => {
          if (index < stack.length) {
            return <RadioButtonCheckedOutlinedIcon />;
          }
          return <RadioButtonUncheckedOutlinedIcon />;
        })}
      </div>
      {errorMessage && <div className="text-red-500 text-2xl mb-5">{errorMessage}</div>}
      <div className="flex flex-col items-center mb-8 ">
        <div className="space-x-1 m-1 flex justify-center">
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('1')}
          >
            <img src="/Pincode/one.svg" alt="one" />
          </Button>
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('2')}
          >
            <img src="/Pincode/two.svg" alt="two" />
          </Button>
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('3')}
          >
            <img src="/Pincode/three.svg" alt="three" />
          </Button>
        </div>
        <div className="space-x-1 m-1 flex justify-center">
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('4')}
          >
            <img src="/Pincode/four.svg" alt="four" />
          </Button>
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('5')}
          >
            <img src="/Pincode/five.svg" alt="five" />
          </Button>
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('6')}
          >
            <img src="/Pincode/six.svg" alt="six" />
          </Button>
        </div>
        <div className="space-x-1 m-1 flex justify-center">
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('7')}
          >
            <img src="/Pincode/seven.svg" alt="seven" />
          </Button>
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('8')}
          >
            <img src="/Pincode/eight.svg" alt="eight" />
          </Button>
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('9')}
          >
            <img src="/Pincode/nine.svg" alt="nine" />
          </Button>
        </div>

        <div className="space-x-1 m-1 flex justify-center">
          <Button variant="text" className="flex justify-center items-center rounded-full w-32" onClick={handleReset}>
            <img src="/Pincode/reload.svg" alt="reload" />
          </Button>
          <Button
            variant="text"
            className="flex justify-center items-center rounded-full w-32"
            onClick={() => handlePushPin('0')}
          >
            <img src="/Pincode/zero.svg" alt="zero" />
          </Button>
          <Button variant="text" className="flex justify-center items-center rounded-full w-32" onClick={handlePopPin}>
            <img src="/Pincode/delete.svg" alt="delete" />
          </Button>
        </div>
      </div>
    </div>
  );
};
