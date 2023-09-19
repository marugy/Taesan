import { IconButton } from '@material-tailwind/react';
import React from 'react';

interface Props {
  roomcode: string;
}

const RoomCode = ({ roomcode }: Props) => {
  const handleCopyClipBoard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      alert('클립보드에 복사했습니다.');
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 tb:text-md dt:text-xl rounded-lg w-[150px] font-bold">
      {roomcode}
      <IconButton className="font-bold ml-2 tb:text-md dt:text-xl" onClick={() => handleCopyClipBoard(roomcode)}>
        d
      </IconButton>
    </div>
  );
};

export default RoomCode;
