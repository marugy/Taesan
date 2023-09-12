import React from 'react';

import ChallengeMemberList from 'components/ChallengePlay/ChallengeMemberList';

const ChallengePlayPage = () => {
  console.log('GET_챌린지 진행정보');
  return (
    <div>
      <div>진행중인 챌린지</div>
      <div>제목 : 메롱</div>
      <div>남은 기간 : 12일</div>
      <div>목표소비금액 : ￦100,000원</div>
      <div>남은 금액 : 50%</div>
      <br />
      <ChallengeMemberList />
    </div>
  );
};

export default ChallengePlayPage;
