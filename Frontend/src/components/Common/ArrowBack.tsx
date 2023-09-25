import { IconButton } from '@material-tailwind/react';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Props {
  pageName: string;
}

const ArrowBack = ({ pageName }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center ml-3 mt-3">
      <IconButton variant="outlined" className="rounded-full mr-3 border-gray-300" onClick={() => navigate(-1)}>
        <NavigateBeforeOutlinedIcon />
      </IconButton>
      <div className="font-bold">{pageName}</div>
    </div>
  );
};

export default ArrowBack;
