import { IconButton } from '@material-tailwind/react';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Props {
  pageName: string;
  handleClose: any;
}

const ArrowBackPincode = ({ pageName, handleClose }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center z-50">
      <IconButton variant="outlined" className="rounded-full border-gray-700" onClick={handleClose}>
        <NavigateBeforeOutlinedIcon />
      </IconButton>
      <div className="font-bold ml-4">{pageName}</div>
    </div>
  );
};

export default ArrowBackPincode;
