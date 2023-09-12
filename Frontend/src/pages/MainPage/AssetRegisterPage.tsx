import React, { useState } from 'react';
import AccountRegister from 'components/AssetRegister/AccountRegister';
import CardRegister from 'components/AssetRegister/CardRegister';
const AssetRegisterPage = () => {
  const [nextButton, setNextButton] = useState(false);
  return (
    <div>
      {nextButton ? <CardRegister /> : <AccountRegister />}
      {nextButton ? null : (
        <button
          onClick={() => {
            setNextButton(true);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
};

export default AssetRegisterPage;
