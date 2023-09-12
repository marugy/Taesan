import React, { useState } from 'react';
import SavingListAll from './SavingListAll';
import SavingListCategory from './SavingListCategory';
const SavingList = () => {
  // 두 개의 버튼이 있는데 첫번째 버튼을 누르면 SavingListAll만 , 두번째 버튼을 누르면 SavingListCategory만 보여줌. 토글 버튼 하나 만들어줘.
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
