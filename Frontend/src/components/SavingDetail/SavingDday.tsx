import React from 'react';

const SavingDday = () => {
  return (
    <div className="border-2 rounded-xl mx-5 bg-white flex items-center justify-between">
      <img src="/piggy_bank.png" alt="pig" className="h-24" />
      <div className="font-bold text-sm dt:text-lg flex flex-col justify-center items-center gap-5 p-1">
        <div>$money 원</div>
        <div>만기까지 $duration ($day)</div>
      </div>
    </div>
  );
};

export default SavingDday;
