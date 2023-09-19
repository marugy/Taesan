import { Button } from '@material-tailwind/react';
import React from 'react';

interface Props {
  money: string;
  setMoney: (value: string) => void;
}

const NumericKeypad = ({ money, setMoney }: Props) => {
  const handleInputNumber = (number: string) => {
    if (money === '0') {
      setMoney(number);
    } else {
      setMoney(money + number);
    }
  };
  const handleInputZero = (count: number) => {
    if (money === '0') {
      setMoney('0');
    } else {
      setMoney(money + '0'.repeat(count));
    }
  };
  const handleDeleteNumber = () => {
    if (money.length === 1) {
      setMoney('0');
    } else {
      setMoney(money.slice(0, -1));
    }
  };

  return (
    <div className="">
      <div className="ml-5 tb:ml-14 dt:ml-20">목표소비금액</div>
      <div className="ml-5 tb:ml-14 dt:ml-20 text-gray-700 text-xs">절약 기간 동안 소비할 금액을 설정하세요! </div>
      <div className=" flex justify-center">
        <div className="text-[30px] tb:text-[40px] dt:text-[50px] h-[60px] tb:h-[80px] dt:h-[100px] w-[360px] tb:w-[360px] dt:w-[460px] bg-back flex justify-center items-center">
          ￦ {money.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
      <div>
        <div className="space-x-1 m-1  flex justify-center">
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl dt:w-[120px] text-gray-500"
            onClick={() => setMoney(String(Number(money) + 1000))}
          >
            ￦1,000
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl dt:w-[120px] text-gray-500"
            onClick={() => setMoney(String(Number(money) + 5000))}
          >
            ￦5,000
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl text-gray-500"
            onClick={() => setMoney(String(Number(money) + 10000))}
          >
            ￦10,000
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl text-gray-500"
            onClick={() => setMoney(String(Number(money) + 50000))}
          >
            ￦50,000
          </Button>
        </div>
        <div className="space-x-1 m-1  flex justify-center">
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('1')}
          >
            1
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('2')}
          >
            2
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('3')}
          >
            3
          </Button>
        </div>
        <div className="space-x-1 m-1 flex justify-center">
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('4')}
          >
            4
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('5')}
          >
            5
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('6')}
          >
            6
          </Button>
        </div>
        <div className="space-x-1 m-1  flex justify-center">
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('7')}
          >
            7
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('8')}
          >
            8
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputNumber('9')}
          >
            9
          </Button>
        </div>
        <div className="space-x-1 m-1  flex justify-center">
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputZero(2)}
          >
            00
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={() => handleInputZero(1)}
          >
            0
          </Button>
          <Button
            variant="text"
            className=" tb:text-md dt:text-xl tb:w-[150px] dt:w-[200px]"
            onClick={handleDeleteNumber}
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NumericKeypad;
