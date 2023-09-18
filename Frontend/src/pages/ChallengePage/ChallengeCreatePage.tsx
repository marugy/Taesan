import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NumericKeypad from 'components/ChallengeCreate/NumericKeypad';

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
      <div>챌린지 생성 페이지</div>
      <br />
      <div>
        <input type="text" value={title} onChange={onChange} />
      </div>
      <br />
      <NumericKeypad money={money} setMoney={setMoney} />
      <br />
      <div>
        <button onClick={handleRecruit}>챌린지 생성</button>
      </div>
    </div>
  );
};

export default ChallengeCreatePage;
