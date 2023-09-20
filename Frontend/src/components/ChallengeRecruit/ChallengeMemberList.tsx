import React, { useState } from 'react';

interface Props {
  playerOne: string;
  playerTwo: string;
  playerThree: string;
  playerFour: string;
  playerFive: string;
}

const ChallengeMemberList = ({ playerOne, playerTwo, playerThree, playerFour, playerFive }: Props) => {
  console.log('GET_챌린지 멤버');
  //   방장 판단 함수

  return (
    <div className="tb:text-md dt:text-xl font-bold space-y-2 mb-5 mr-5 bg-[#E3E9ED] rounded-xl">
      <div className="flex justify-end mx-10 mt-5">
        <div>👑{playerOne}</div>
      </div>
      <div className="flex justify-end mx-10">
        <div>{playerTwo}</div>
      </div>
      <div className="flex justify-end mx-10">
        <div>{playerThree}</div>
      </div>
      <div className="flex justify-end mx-10">
        <div>{playerFour}</div>
      </div>
      <div className="flex justify-end mx-10">
        <div>{playerFive}</div>
      </div>
    </div>
  );
};

export default ChallengeMemberList;
