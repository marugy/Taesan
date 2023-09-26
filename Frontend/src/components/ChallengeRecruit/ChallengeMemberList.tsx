import { pl } from 'date-fns/locale';
import React, { useState } from 'react';

interface Props {
  players: string[];
}

const ChallengeMemberList = ({ players }: Props) => {
  return (
    <div className="tb:text-md dt:text-xl font-bold space-y-2 mb-5 mr-5 bg-[#E3E9ED] rounded-xl">
      {players.map((player, index) => (
        <div key={index} className="flex justify-end mx-10 mt-5">
          {index === 0 ? `👑${player}` : player}
        </div>
      ))}
    </div>
  );
};

export default ChallengeMemberList;
