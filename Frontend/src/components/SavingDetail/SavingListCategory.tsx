import React from 'react';

const SavingListCategory = () => {
  return (
    <div className="flex flex-col space-y-20">
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>샀다 치고</div>
          <div>$buyifSaveMoney</div>
        </div>
        <div className="flex justify-between">
          <div>습관 저금통</div>
          <div>$habitSaveMoeny</div>
        </div>
        <div className="flex justify-between">
          <div>절약 챌린지</div>
          <div>$challengeSaveMoney</div>
        </div>
        <div className="flex justify-between">
          <div>총 액</div>
          <div>$allSaveMoney</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div>현재 이자</div>
          <div>$interest</div>
        </div>
      </div>
    </div>
  );
};

export default SavingListCategory;
