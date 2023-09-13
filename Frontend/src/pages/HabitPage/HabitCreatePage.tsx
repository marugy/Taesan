import FrequencyPayList from 'components/HabitCreate/FrequencyPayList';
import React from 'react';

const HabitCreatePage = () => {
  return (
    <div>
      <div>습관생성페이지</div>
      <div>
        <input type="text" placeholder="습관제모깅요" />
      </div>
      <div>
        <button>대표습관1</button>
        <button>대표습관2</button>
        <button>대표습관3</button>
        <button>대표습관4</button>
      </div>
      <div>
        <FrequencyPayList />
      </div>
    </div>
  );
};

export default HabitCreatePage;
