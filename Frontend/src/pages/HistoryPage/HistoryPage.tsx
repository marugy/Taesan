import React from 'react';
import Card from 'components/Common/Card';
import HistoryList from 'components/History/HistoryList';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
const HistoryPage = () => {
  return (
    <div className='h-screen'>
      <ArrowBack pageName='거래내역'/>
      <Card />
      <HistoryList />
      <BottomNav/>
    </div>
  );
};

export default HistoryPage;
