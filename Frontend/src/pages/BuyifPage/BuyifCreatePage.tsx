import React, { useState } from 'react';
import BuyifRegister from 'components/BuyifCreate/BuyifRegister';
import BottomNav from 'components/Common/BottomNav';

const BuyifCreatePage = () => {
  const [item, setItem] = useState('');

  return (
    <div>
      <BuyifRegister/>
      <BottomNav/>
    </div>
  );
};

export default BuyifCreatePage;
