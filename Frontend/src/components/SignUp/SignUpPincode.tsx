import { Button } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';

import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import React, { useEffect, useState } from 'react';
import ArrowBack from 'components/Common/ArrowBack';

const MAX_LENGTH = 6;

interface Props {
  pincode: string;
  setPincode: (value: string) => void;
  setSimplePassword: (value: string) => void;
}

export const SignUpPincode = ({ pincode, setPincode, setSimplePassword }: Props) => {
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

  useEffect(() => {
    // 핀코드가 MAX_LENGTH에 도달했는지 확인
    if (stack.length === MAX_LENGTH) {
      switch (turn) {
        case 1: // 첫 번째 턴에서는 핀코드 설정
          setPincode(stack.join(''));
          setTurn(2); // 다음 턴으로 이동
          setStack([]); // 입력 스택 초기화
          break;

        case 2: // 두 번째 턴에서는 핀코드 재입력 확인
          // 입력한 핀코드와 재입력한 핀코드가 일치하는지 확인
          if (pincode === stack.join('')) {
            setSimplePassword(pincode); // 간편 비밀번호 설정
          } else {
            alert('핀코드가 일치하지 않습니다.'); // 경고 메시지 표시
            setTurn(1); // 첫 번째 턴으로 되돌아감
            setStack([]); // 입력 스택 초기화
          }
          break;

        default:
          break;
      }
    }
  }, [stack, pincode, turn]);

  return (
    <div className="fixed z-50 flex-col bg-back">
      {turn === 1 && (
        <div className="text-main flex justify-center mt-10 text-2xl tb:text-3xl dt:text-4xl font-bold">암호 입력</div>
      )}
      {turn === 2 && (
        <div className="text-main flex justify-center mt-10 text-2xl tb:text-3xl dt:text-4xl font-bold">
          암호 재입력
        </div>
      )}
      <div className="flex justify-center space-x-5 text-main my-16 ">
        {Array.from({ length: MAX_LENGTH }).map((_, index) => {
          if (index < stack.length) {
            return (
              <RadioButtonCheckedOutlinedIcon
                sx={{
                  fontSize: {
                    xs: '30px', // 모바일
                    md: '40px', // 태블릿
                    lg: '50px', // 데스크톱
                  },
                }}
              />
            );
          }
          return (
            <RadioButtonUncheckedOutlinedIcon
              sx={{
                fontSize: {
                  xs: '20px', // 모바일
                  md: '30px', // 태블릿
                  lg: '40px', // 데스크톱
                },
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-col mb-16 ">
        <div className="space-x-5 m-1 flex justify-end">
          <Button
            variant="outlined"
            className="text-4xl tb:text-3xl dt:text-xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('1')}
          >
            1
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('2')}
          >
            2
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('3')}
          >
            3
          </Button>
        </div>
        <div className="space-x-5  m-1 flex justify-end">
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('4')}
          >
            4
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('5')}
          >
            5
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('6')}
          >
            6
          </Button>
        </div>
        <div className="space-x-5 m-1  flex justify-end">
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('7')}
          >
            7
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('8')}
          >
            8
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('9')}
          >
            9
          </Button>
        </div>
        <div className="space-x-5 m-1  flex justify-end">
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('0')}
          >
            0
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC] flex items-center"
            onClick={handlePopPin}
          >
            <BackspaceOutlinedIcon
              sx={{
                fontSize: {
                  xs: '30px', // 모바일
                  md: '40px', // 태블릿
                  lg: '50px', // 데스크톱
                },
              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
