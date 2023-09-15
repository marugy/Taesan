import React from 'react';

import { useNavigate } from 'react-router';
import { getInfo } from 'api/member';

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>테스트 페이지</div>
      <button onClick={() => navigate('/main')}>메인 페이지로 이동</button>
      <hr />
      <div>
        <button onClick={getInfo}>사용자 정보 조회</button>
      </div>
    </div>
  );
};

export default TestPage;
