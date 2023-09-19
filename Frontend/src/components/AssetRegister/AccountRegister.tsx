import React from 'react';
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography } from '@material-tailwind/react';
const AccountRegister = () => {
  return (
    <div className="flex  flex-col  items-center">
      <Typography variant="h3">'태산' 사용을 위해 등록하실</Typography>
      <Typography variant="h3"> 계좌를 선택해주세요. </Typography>
      <div>
        <Card className="w-96">
          <List>
            {/* map 함수로 ListItem 나타내기 + 선택시 호버효과 */}
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src="/piggy_bank.png" />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Tania Andrew
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="alexander" src="/piggy_bank.png" />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Alexander
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Backend Developer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="emma" src="/piggy_bank.png" />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Emma Willever
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  UI/UX Designer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="emma" src="/piggy_bank.png" />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Emma Willever
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  UI/UX Designer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="emma" src="/piggy_bank.png" />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Emma Willever
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  UI/UX Designer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
};

export default AccountRegister;
