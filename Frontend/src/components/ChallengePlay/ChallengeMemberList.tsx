import React, { useState } from 'react';

interface Player {
  name: string;
  spare: number;
}

interface Props {
  players: Player[];
  price: number;
}

const ChallengeMemberList = ({ players, price }: Props) => {
  console.log('GET_챌린지 멤버');
  //   방장 판단 함수
  return (
    <div className="tb:text-md dt:text-xl font-bold my-5  bg-[#E3E9ED] rounded-xl">
      {players.map((player, index) => (
        <div key={index} className="flex justify-end mx-10 my-5">
          {index === 0 ? `👑 ${player.name}` : player.name} {(player.spare / price) * 100}%
        </div>
      ))}
      {/* <div className="flex justify-end mx-10 mt-5 items-center">
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
      </div> */}
    </div>
  );
};

export default ChallengeMemberList;
