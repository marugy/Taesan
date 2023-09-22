import React from 'react';
import { Avatar, Typography, ListItemPrefix } from '@material-tailwind/react';
const HabitListCompleted = () => {
  return (
    <div>
      <div className="w-full flex justify-between mt-2">
        <ListItemPrefix>
          <Avatar variant="square" className="p-1" alt="candice" src="Account/KB.jpg" />
        </ListItemPrefix>
        <div className="w-full flex justify-between">
          <div>
            <Typography variant="h6" color="blue-gray">
              담배
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              2023.09.12~
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="green" className="text-end">
              3,000원
            </Typography>
            <Typography variant="small" color="blue-gray" className="font-normal text-end">
              3,000원
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-2">
        <ListItemPrefix>
          <Avatar variant="square" className="p-1" alt="candice" src="Account/KB.jpg" />
        </ListItemPrefix>
        <div className="w-full flex justify-between">
          <div>
            <Typography variant="h6" color="blue-gray">
              술
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              2023.08.23~
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="green" className="text-end">
              1,500원
            </Typography>
            <Typography variant="small" color="blue-gray" className="font-normal text-end">
              3,000원
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitListCompleted;
