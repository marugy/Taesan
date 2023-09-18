import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NumericKeypad from 'components/ChallengeCreate/NumericKeypad';
import { Button, Input } from '@material-tailwind/react';

const ChallengeCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [money, setMoney] = useState('0');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleRecruit = () => {
    console.log('챌린지 생성 묻는 모달');
    console.log('OK 시 챌린지 생성');
    navigate('/challenge/recruit');
  };

  return (
    <div>
      <div className="m-10">
        <Input label="챌린지 제목" value={title} onChange={onChange} crossOrigin={false} />
      </div>
      <NumericKeypad money={money} setMoney={setMoney} />
      <br />
      <div>
        <Button onClick={handleRecruit}>챌린지 생성</Button>
      </div>
    </div>
  );
};

export default ChallengeCreatePage;
