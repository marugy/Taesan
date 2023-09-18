import React, { useState } from 'react';
import SavingListAll from './SavingListAll';
import SavingListCategory from './SavingListCategory';
const SavingList = () => {
  const [isAll, setIsAll] = useState(true);
  const [isCategory, setIsCategory] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsAll(true);
          setIsCategory(false);
        }}
      >
        전체
      </button>
      <button
        onClick={() => {
          setIsAll(false);
          setIsCategory(true);
        }}
      >
        카테고리별
      </button>
      {isAll ? <SavingListAll /> : null}
      {isCategory ? <SavingListCategory /> : null}
    </div>
  );
};

export default SavingList;
