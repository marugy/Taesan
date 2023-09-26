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
          {index === 0 ? `👑 ${player.name}` : player.name} {Math.round((player.spare / price) * 100)}%
        </div>
      ))}
    </div>
  );
};

export default ChallengeMemberList;
