import React from 'react';
import HistoryDetail from 'components/HistoryDetail/HistoryDetail';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';

const HistoryDetailPage = () => {
  return (
    <div className='h-screen'>
      <ArrowBack pageName='상세내역'/>
      <HistoryDetail/>
      <BottomNav/>
    </div>
  );
};

export default HistoryDetailPage;