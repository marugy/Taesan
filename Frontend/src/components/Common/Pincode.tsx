import { Button } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import React, { useState } from 'react';

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
      <div className="flex justify-center space-x-5 text-main text-[30px] my-16">
        {Array.from({ length: MAX_LENGTH }).map((_, index) => {
          if (index < stack.length) {
            return <img src="/Pincode/check.png" alt="check" />;
          }
          return <img src="/Pincode/uncheck.png" alt="check" />;
        })}
      </div>
      <div className="flex flex-col justify-center mb-16">
        <div className="space-x-5 m-1 flex justify-end">
          <Button
            variant="outlined"
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
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
            className="text-5xl tb:text-6xl dt:text-7xl rounded-full text-main border-[#0067AC]"
            onClick={handlePopPin}
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};
