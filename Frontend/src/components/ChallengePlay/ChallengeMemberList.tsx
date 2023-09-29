import React, { useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

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
    <div className="tb:text-md dt:text-xl font-bold my-5 w-2/3 bg-[#E3E9ED] rounded-xl">
      {players.map((player, index) => (
        <div key={index} className="flex flex-col justify-end mx-10 my-5 dt:text-xl">
          {index === 0 ? `👑 ${player.name}` : player.name}
          {/* {Math.round((player.spare / price) * 100)}% */}
          <ProgressBar
            completed={Math.round((player.spare / price) * 100)}
            bgColor="#0046FF"
            customLabel={String(Math.round((player.spare / price) * 100)) + '%'}
            animateOnRender
            height="20px"
          />
        </div>
      ))}
    </div>
  );
};

export default ChallengeMemberList;
