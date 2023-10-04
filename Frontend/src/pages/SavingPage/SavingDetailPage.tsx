import React from 'react';
import SavingDday from 'components/SavingDetail/SavingDday';
import SavingList from 'components/SavingDetail/SavingList';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
const SavingDetailPage = () => {
  return (
    <div>
      <ArrowBack pageName="적금통 상세내역" />
      <SavingDday />
      <SavingList />
      <BottomNav />
    </div>
  );
};

export default SavingDetailPage;
