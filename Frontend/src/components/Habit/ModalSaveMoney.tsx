import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  ListItemPrefix,
  Avatar,
} from '@material-tailwind/react';

const ModalSaveMoney = () => {
  const [size, setSize] = useState(null);

  const handleOpen = (value: any) => setSize(value);
  return (
    <div className="text-center">
      <Button color="blue" onClick={() => handleOpen('md')} variant="gradient">
        오늘 습관으로 아낀 돈 저금하기
      </Button>
      <Dialog
        open={size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl' || size === 'xxl'}
        size={size || 'md'}
        handler={handleOpen}
      >
        <DialogHeader className="flex justify-center text-2xl ">9월 22일 적금하기</DialogHeader>
        <DialogBody divider>
          {/* 여기다가 내용 적기 (현재 하드코딩) */}
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
          <div className="text-center mt-3">
            아낀 금액 4,500원을 <br></br> 티끌머니로 전환하시겠습니까?
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center gap-10">
          <Button variant="filled" color="blue" size="lg" onClick={() => handleOpen(null)} className="mr-1">
            <span>확인</span>
          </Button>
          <Button variant="gradient" color="red" size="lg" onClick={() => handleOpen(null)}>
            <span>취소</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ModalSaveMoney;
