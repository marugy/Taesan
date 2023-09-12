import React from 'react';

import ChallengeMemberList from 'components/ChallengeResultDetail/ChallengeMemberList';

const ChallengeResultDetailPage = () => {
  console.log('GET_이전 챌린지 상세');
  return (
    <div>
      <div>진행중인 챌린지</div>
      <div>제목 : 메롱</div>
      <div>기간 : 12일</div>
      <div>목표소비금액 : ￦100,000원</div>
      <div>남은 금액 : ￦30,000원</div>
      <br />
      <ChallengeMemberList />
    </div>
  );
};

export default ChallengeResultDetailPage;
