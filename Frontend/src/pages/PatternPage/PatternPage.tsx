import React from 'react';
import Graph from 'components/Pattern/Graph';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
const PatternPage = () => {
  return (
    <div>
      <ArrowBack pageName='소비패턴 분석'/>
      <Graph/>
      <BottomNav/>
    </div>
  );
};

export default PatternPage;