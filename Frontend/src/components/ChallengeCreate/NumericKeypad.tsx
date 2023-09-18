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
    <div>
      <div className="font-bold">목표소비금액</div>
      <div className="font-bold">￦ {money.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
      <div>
        <div className="space-x-1 m-1">
          <Button onClick={() => setMoney(String(Number(money) + 1000))}>￦1,000</Button>
          <Button onClick={() => setMoney(String(Number(money) + 5000))}>￦5,000</Button>
          <Button onClick={() => setMoney(String(Number(money) + 10000))}>￦10,000</Button>
          <Button onClick={() => setMoney(String(Number(money) + 50000))}>￦50,000</Button>
        </div>
        <div className="space-x-1 m-1">
          <Button onClick={() => handleInputNumber('1')}>1</Button>
          <Button onClick={() => handleInputNumber('2')}>2</Button>
          <Button onClick={() => handleInputNumber('3')}>3</Button>
        </div>
        <div className="space-x-1 m-1">
          <Button onClick={() => handleInputNumber('4')}>4</Button>
          <Button onClick={() => handleInputNumber('5')}>5</Button>
          <Button onClick={() => handleInputNumber('6')}>6</Button>
        </div>
        <div className="space-x-1 m-1">
          <Button onClick={() => handleInputNumber('7')}>7</Button>
          <Button onClick={() => handleInputNumber('8')}>8</Button>
          <Button onClick={() => handleInputNumber('9')}>9</Button>
        </div>
        <div className="space-x-1 m-1">
          <Button className="w-12" onClick={() => handleInputZero(2)}>
            00
          </Button>
          <Button onClick={() => handleInputZero(1)}>0</Button>
          <Button onClick={handleDeleteNumber}>X</Button>
        </div>
      </div>
    </div>
  );
};

export default NumericKeypad;
