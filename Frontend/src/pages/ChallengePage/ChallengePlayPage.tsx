import React from 'react';

import ChallengeMemberList from 'components/ChallengePlay/ChallengeMemberList';

import ArrowBack from 'components/Common/ArrowBack';

const ChallengePlayPage = () => {
  console.log('GET_챌린지 진행정보');
  return (
    <div>
      <ArrowBack pageName="진행중인 챌린지" />

      <div className="flex flex-col items-center">
        <div className="m-5">
          <div className="mr-14 tb:mr-14 dt:mr-32 mb-10 tb:text-md dt:text-xl font-bold">
            일주일동안 열심히 모아봐요
          </div>
          <div className="mr-14 tb:mr-14 dt:mr-32 mb-2 tb:text-md dt:text-xl font-bold">남은 기간 : 12일</div>
          <div className="mr-14 tb:mr-14 dt:mr-32 mb-2 tb:text-md dt:text-xl font-bold">
            목표 소비 금액 : ￦ 100,000
          </div>
          <div className="mr-14 tb:mr-14 dt:mr-32 mb-2 tb:text-md dt:text-xl font-bold">현재 남은 금액 : ￦ 50,000</div>
        </div>
        <ChallengeMemberList />
      </div>
    </div>
  );
};

export default ChallengePlayPage;
