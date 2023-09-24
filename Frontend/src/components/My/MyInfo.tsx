import React, { useState } from 'react';

const MyInfo = () => {
  const [name, setName] = useState('박희창');
  const [account, setAccount] = useState('신한은행 110509677498');

  return (
    <div className="mb-5">
      <div className="text-3xl tb:text-4xl dt:text-5xl mb-1">{name}</div>
      <div className="text-xs tb:text-sm dt:text-lg font-light text-gray-700">{account}</div>
    </div>
  );
};

export default MyInfo;
