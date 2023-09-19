import React, { useState } from 'react';

const ChallengeMemberList = () => {
  const [playerOne, setPlayerOne] = useState('신규람');
  const [playerTwo, setPlayerTwo] = useState('김하영');
  const [playerThree, setPlayerThree] = useState('배용현');
  const [playerFour, setPlayerFour] = useState('김성준');
  const [playerFive, setPlayerFive] = useState('이지헌');

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
