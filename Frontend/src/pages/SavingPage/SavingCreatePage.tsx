import React, { useState } from 'react';
import SavingCreate from 'components/SavingCreate/SavingCreate';
const SavingCreatePage = () => {
  const [createButton, setCreateButton] = useState(false);
  return (
    <div>
      {createButton ? (
        <div>암호입력 공통 컴포넌트 띄우기</div>
      ) : (
        <div>
          <SavingCreate />{' '}
          <button
            onClick={() => {
              setCreateButton(true);
            }}
          >
            새 적금 만들기
          </button>
        </div>
      )}
    </div>
  );
};

export default SavingCreatePage;
