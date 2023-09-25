import React, { useState } from 'react';

interface MyInfoProps {
  name: string; 
}

const MyInfo =( {name} : MyInfoProps) => {
  return (
    <div className="mb-5">
      <div className="text-3xl tb:text-4xl dt:text-5xl mb-1 font-main">{name}님, 반가워요!</div>
      {/* <div className="text-xs tb:text-sm dt:text-lg font-light text-gray-700">{account}</div> */}
    </div>
  );
};

export default MyInfo;
