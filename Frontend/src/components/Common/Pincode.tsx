import { Button } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';

import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import React, { useState } from 'react';
import ArrowBack from 'components/Common/ArrowBack';

const MAX_LENGTH = 6;

export const Pincode = () => {
  // 저장된 PinCode 값

  // 입력한 PinCode 값
  const [stack, setStack] = useState<string[]>([]);
  console.log(stack);

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

  return (
    <div className="flex-col">
      <div className="text-main flex justify-center mt-10 text-2xl tb:text-3xl dt:text-4xl font-bold">암호 입력</div>
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
            버
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('2')}
          >
            튼
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('3')}
          >
            수
          </Button>
        </div>
        <div className="space-x-5  m-1 flex justify-end">
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('4')}
          >
            정
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('5')}
          >
            해
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('6')}
          >
            야
          </Button>
        </div>
        <div className="space-x-5 m-1  flex justify-end">
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('7')}
          >
            해
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('8')}
          >
            으
          </Button>
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={() => handlePushPin('9')}
          >
            아
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
