import React, { useState } from 'react';
import SavingCreate from 'components/SavingCreate/SavingCreate';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';

const SavingCreatePage = () => {
  // const [createButton, setCreateButton] = useState(false);
  return (
    <div className="h-full overflow-hidden">
      <ArrowBack pageName="적금 만들기" />
      {/* {createButton ? (
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
      )} */}

      <SavingCreate />
      <BottomNav />
    </div>
  );
};

export default SavingCreatePage;
