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
      <div>목표소비금액</div>
      <div>￦{money.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
      <div>
        <button onClick={() => setMoney(String(Number(money) + 1000))}>￦1,000</button>
        <button onClick={() => setMoney(String(Number(money) + 5000))}>￦5,000</button>
        <button onClick={() => setMoney(String(Number(money) + 10000))}>￦10,000</button>
        <button onClick={() => setMoney(String(Number(money) + 50000))}>￦50,000</button>
        <div>
          <button onClick={() => handleInputNumber('1')}>1</button>
          <button onClick={() => handleInputNumber('2')}>2</button>
          <button onClick={() => handleInputNumber('3')}>3</button>
        </div>
        <div>
          <button onClick={() => handleInputNumber('4')}>4</button>
          <button onClick={() => handleInputNumber('5')}>5</button>
          <button onClick={() => handleInputNumber('6')}>6</button>
        </div>
        <div>
          <button onClick={() => handleInputNumber('7')}>7</button>
          <button onClick={() => handleInputNumber('8')}>8</button>
          <button onClick={() => handleInputNumber('9')}>9</button>
        </div>
        <div>
          <button onClick={() => handleInputZero(2)}>00</button>
          <button onClick={() => handleInputZero(1)}>0</button>
          <button onClick={handleDeleteNumber}>X</button>
        </div>
      </div>
    </div>
  );
};

export default NumericKeypad;
