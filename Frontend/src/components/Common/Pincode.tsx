import React from 'react';
import { usePaymentKeypad } from 'hooks/usePaymentKeypad';

const Pincode = () => {
  const pincodePad = usePaymentKeypad();
  return <div>{pincodePad}</div>;
};

export default Pincode;
