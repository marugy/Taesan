import React, { useState } from 'react';
import SavingListAll from './SavingListAll';
import SavingListCategory from './SavingListCategory';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { ArrowsRightLeftIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid';

const SavingList = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const data = [
    {
      label: '전환 내역',
      value: 'all',
      icon: ArrowsRightLeftIcon,
    },
    {
      label: '티끌머니 분류',
      value: 'category',
      icon: Square3Stack3DIcon,
    },
  ];

  return (
    <div className="mx-10 my-5">
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
          <TabPanel value="all">
            <SavingListAll />
          </TabPanel>
          <TabPanel value="category">
            <SavingListCategory />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default SavingList;
