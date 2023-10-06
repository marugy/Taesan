import { Button } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';

import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

import React, { useEffect, useState } from 'react';
import ArrowBackChangePincode from './ArrowBackPincode';
import { useNavigate } from 'react-router-dom';
const MAX_LENGTH = 6;

interface Props {
  pincode: string;
  setPincode: (value: string) => void;
  setSimplePassword: (value: string) => void;
}

export const NewPincode = ({ pincode, setPincode, setSimplePassword }: Props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  // 현재 턴 (1: 입력, 2: 확인)
  const [turn, setTurn] = useState(1);

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

  const handleReset = () => {
    setStack([]);
  };

  useEffect(() => {
    // 핀코드가 MAX_LENGTH에 도달했는지 확인
    if (stack.length === MAX_LENGTH) {
      switch (turn) {
        case 1: // 첫 번째 턴에서는 핀코드 설정
          setErrorMessage(false);
          setPincode(stack.join(''));
          setTurn(2); // 다음 턴으로 이동
          setStack([]); // 입력 스택 초기화
          break;

        case 2: // 두 번째 턴에서는 핀코드 재입력 확인
          if (pincode === stack.join('')) {
            setSimplePassword(pincode); // 간편 비밀번호 설정
          } else {
            setErrorMessage(true); // '입력한 암호와 다릅니다!'
            setTurn(1); // 첫 번째 턴으로 되돌아감
            setStack([]); // 입력 스택 초기화
          }
          break;

        default:
          break;
      }
    }
  }, [stack, pincode, turn]);

  const handleClose = () => {
    navigate('/mypage');
  };

  return (
    <div
      className={`flex inset-0 justify-center items-center fixed h-screen  w-full z-40 flex-col bg-back mt-5 ${
        errorMessage ? 'animate-shake' : ''
      }`}
    >
      <div className="fixed top-10 left-5  dt:left-96">
        <ArrowBackChangePincode pageName="뒤로가기" handleClose={handleClose} />
      </div>
      {turn === 1 && (
        <div className="text-[#0067AC] flex justify-center text-2xl tb:text-3xl dt:text-4xl font-bold mb-10">
          새 암호 입력
        </div>
      )}
      {turn === 2 && (
        <div className="text-[#0067AC] flex justify-center text-2xl tb:text-3xl dt:text-4xl font-bold mb-10">
          새 암호 재입력
        </div>
      )}
      <div className="flex justify-center space-x-5 text-[#0067AC] mb-5  ">
        {Array.from({ length: MAX_LENGTH }).map((_, index) => {
          if (index < stack.length) {
            return <RadioButtonCheckedOutlinedIcon />;
          }
          return <RadioButtonUncheckedOutlinedIcon />;
        })}
      </div>
      {errorMessage && <div className="text-red-500 text-2xl mb-5">입력한 암호와 다릅니다!</div>}
      <div className="flex flex-col mb-8 ">
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
