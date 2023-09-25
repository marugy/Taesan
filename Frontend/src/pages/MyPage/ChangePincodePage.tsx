import { Pincode } from 'components/Common/Pincode';
import React, { useState } from 'react';

const ChangePincodePage = () => {
  const [pincodeVisible, setPincodeVisible] = useState(true);

  const onCorrectPincode = () => {
    setPincodeVisible(false);
  };

  return (
    <div className=" flex flex-col items-center">
      {pincodeVisible && <Pincode onCorrectPincode={onCorrectPincode} />}
    </div>
  );
};

export default ChangePincodePage;
