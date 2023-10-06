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
    <div className="">
      <IconButton variant="outlined" className="rounded-full border-gray-700" onClick={handleClose}>
        <CloseIcon color="error" />
      </IconButton>
    </div>
  );
};

export default ArrowBackPincode;
