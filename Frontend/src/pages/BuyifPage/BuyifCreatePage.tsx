import React, { useState } from 'react';
import BuyifRegister from 'components/BuyifCreate/BuyifRegister';
const BuyifCreatePage = () => {
  const [item, setItem] = useState('');

  return (
    <div>
      <BuyifRegister/>
    </div>
  );
};

export default BuyifCreatePage;
