import React from 'react';
import HabitItem from './HabitItem';

const HabitList = () => {
  return (
    <div>
      <div>
        <button>진행중인 놈 GET</button>
        <button>완료한 놈 GET</button>
      </div>
      <div>
        <HabitItem />
      </div>
    </div>
  );
};

export default HabitList;
