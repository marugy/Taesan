import { IconButton } from '@material-tailwind/react';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Props {
  pageName: string;
  handleClose: any;
}

const ArrowBackChangePincode = ({ pageName, handleClose }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center z-50">
      <IconButton variant="outlined" className="rounded-full border-gray-700" onClick={handleClose}>
        <NavigateBeforeOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default ArrowBackChangePincode;
