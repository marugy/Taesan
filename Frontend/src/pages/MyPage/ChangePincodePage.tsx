import { Pincode } from 'components/Common/Pincode';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const ChangePincodePage = () => {
  const [pincodeVisible, setPincodeVisible] = useState(true);
  const navigate = useNavigate();

  // 핀코드가 일치하면
  const onCorrectPincode = () => {
    setPincodeVisible(false);
    navigate('/mypage');
  };

  return (
    <div className=" flex flex-col items-center">
      {pincodeVisible && <Pincode onCorrectPincode={onCorrectPincode} />}
    </div>
  );
};

export default ChangePincodePage;
