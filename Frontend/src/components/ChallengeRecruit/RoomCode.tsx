import React from 'react';
import { IconButton } from '@material-tailwind/react';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

interface Props {
  roomcode: string;
}

const RoomCode = ({ roomcode }: Props) => {
  const handleCopyClipBoard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      Toast.fire({
        icon: 'success',
        title: '클립보드에 복사했습니다.',
      });
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: '복사에 실패했습니다.',
      });
    }
  };

  return (
    <div className="flex justify-center items-center mt-5 bg-gray-100 tb:text-md dt:text-xl rounded-lg p-2 w-11/12">
      <span className="whitespace-nowrap overflow-x-auto">{roomcode}</span>
      <div>
        <IconButton
          className="font-bold m-1 tb:text-md dt:text-xl bg-main"
          onClick={() => handleCopyClipBoard(roomcode)}
        >
          <ContentCopyOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default RoomCode;
