import React, { useState } from 'react';

const ChallengeMemberList = () => {
  const [playerOne, setPlayerOne] = useState('신규람');
  const [playerTwo, setPlayerTwo] = useState('김하영');
  const [playerThree, setPlayerThree] = useState('배용현');
  const [playerFour, setPlayerFour] = useState('김성준');
  const [playerFive, setPlayerFive] = useState('이지헌');

  const [playerOneScore, setPlayerOneScore] = useState(30);
  const [playerTwoScore, setPlayerTwoScore] = useState(30);
  const [playerThreeScore, setPlayerThreeScore] = useState(20);
  const [playerFourScore, setPlayerFourScore] = useState(20);
  const [playerFiveScore, setPlayerFiveScore] = useState(20);

  //

  console.log('GET_챌린지 멤버');
  //   방장 판단 함수
  return (
    <div className="tb:text-md dt:text-xl font-bold mb-5  bg-[#E3E9ED] rounded-xl">
      <div className="flex justify-end mx-10 mt-5 items-center">
        <div>👑{playerOne}</div>
        <div className="ml-5 font-light text-[#0067AC] text-sm">{playerOneScore}%</div>
      </div>
      <div className="flex justify-end mx-10 mt-2 items-center">
        <div>{playerTwo}</div>
        <div className="ml-5 font-light text-[#0067AC]  text-sm">{playerTwoScore}%</div>
      </div>
      <div className="flex justify-end mx-10 mt-2 items-center">
        <div>{playerThree}</div>
        <div className="ml-5 font-light text-[#0067AC]  text-sm">{playerThreeScore}%</div>
      </div>
      <div className="flex justify-end mx-10 mt-2 items-center">
        <div>{playerFour}</div>
        <div className="ml-5 font-light text-[#0067AC]  text-sm">{playerFourScore}%</div>
      </div>
      <div className="flex justify-end mx-10 mt-2 mb-5 items-center">
        <div>{playerFive}</div>
        <div className="ml-5 font-light text-[#0067AC] text-sm">{playerFiveScore}%</div>
      </div>
    </div>
  );
};

export default ChallengeMemberList;
