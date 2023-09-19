import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NumericKeypad from 'components/ChallengeCreate/NumericKeypad';
import { Button, Input } from '@material-tailwind/react';
import { Slider } from '@material-tailwind/react';

const ChallengeCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [money, setMoney] = useState('0');
  const [sliderBarPercent, setSliderBarPercent] = useState(3.3333);
  const [period, setPeriod] = useState('1');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleRecruit = () => {
    console.log('챌린지 생성 묻는 모달');
    console.log('OK 시 챌린지 생성');
    navigate('/challenge/recruit');
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderBarPercent(newValue);
  };

  useEffect(() => {
    const newPeriod = String(parseInt((sliderBarPercent / 3.3333).toString(), 10));
    setPeriod(newPeriod);
  }, [sliderBarPercent]);

  return (
    <div className="flex flex-col items-center">
      <div className="m-5 w-[300px] dt:w-[350px]">
        <Input label="챌린지 제목" value={title} onChange={onChange} crossOrigin={false} />
      </div>
      <div className="mb-5 flex flex-col items-center">
        <div className="">{period} 일</div>
        <Slider
          color="indigo"
          size="lg"
          defaultValue={sliderBarPercent}
          className="w-[300px] dt:w-[400px]"
          onChange={handleSliderChange}
          min={3.3333}
        />
      </div>
      <NumericKeypad money={money} setMoney={setMoney} />
      <br />
      <div className="mb-5">
        <Button className="bg-main tb:text-md dt:text-xl" onClick={handleRecruit}>
          챌린지 생성
        </Button>
      </div>
    </div>
  );
};

export default ChallengeCreatePage;
