import React, { useState } from 'react';
import HabitListCompleted from './HabitListCompleted';
import HabitListProceeding from './HabitListProceeding';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
const HabitList = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('proceeding');
  const data = [
    {
      label: '진행 중인 습관',
      value: 'proceeding',
      icon: Square3Stack3DIcon,
    },
    {
      label: '완료된 습관',
      value: 'completed',
      icon: UserCircleIcon,
    },
  ];
  return (
    <div className="mt-10">
      <Tabs value={selectedTab}>
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} onClick={() => setSelectedTab(value)}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: 'w-5 h-5' })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel value="proceeding">
            <HabitListProceeding />
          </TabPanel>
          <TabPanel value="completed">
            <HabitListCompleted />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default HabitList;
