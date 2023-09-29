import React, { useState } from 'react';
import AccountRegister from 'components/AssetRegister/AccountRegister';
import CardRegister from 'components/AssetRegister/CardRegister';
import { Button } from '@material-tailwind/react';
const AssetRegisterPage = () => {
  const [nextButton, setNextButton] = useState(false);
  return (
    <div>
      {nextButton ? <CardRegister /> : <AccountRegister />}
      {nextButton ? null : (
        <div className="flex justify-center mt-5">
          <Button
            color="blue"
            onClick={() => {
              setNextButton(true);
            }}
          >
            다음
          </Button>
        </div>
      )}
    </div>
  );
};

export default AssetRegisterPage;
