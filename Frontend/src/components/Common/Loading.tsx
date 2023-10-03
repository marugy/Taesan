import { Alert, Space, Spin } from 'antd';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex items-center">
        {/* <Spin size="large" /> */}
        <CircularProgress size={100} sx={{ color: 'white' }} />
      </div>
    </div>
  );
};

export default Loading;
