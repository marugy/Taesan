import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { Toast } from 'components/Common/Toast';

interface Props {
  endDate: string;
  exchange: boolean;
  spare: number;
  id: number;
  price: number;
  startDate: string;
  title: string;
}

const ChallengeResultItem = ({ endDate, exchange, id, price, startDate, title, spare }: Props) => {
  const navigate = useNavigate();

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const formatDate = (dateObj: Date) =>
    `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(
      2,
      '0',
    )}`;

  const handleSave = () => {
    Swal.fire({
      title: '아낀 금액 저축',
      html: `아낀 금액을 저축하시겠습니까?`,
      icon: 'question',

      confirmButtonColor: '#0046ff',
      confirmButtonText: '저축페이지로 이동하는 이벤트',

      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: '취소',
    }).then((result) => {
      // 저축 페이지로 이동
      // navigate('/');
    });
  };

  return (
    <div className="tb:w-[450px] dt:w-[500px] border">
      <div className="flex flex-col items-center ml-10 mr-20">
        <Button
          variant="text"
          className="font-bold text-lg dt:text-[25px] my-2"
          onClick={() => navigate(`/challenge/result/${id}`)}
        >
          {title}
        </Button>
      </div>
      <div className="flex mb-3 mr-3 justify-between">
        <div className="ml-5 text-[13px] dt:text-[15px]">
          <div className=" ">
            ￦ {spare} / {price}
          </div>
          <div className="">
            {formatDate(startDateObj)} ~ {formatDate(endDateObj)}
          </div>
        </div>
        <Button
          className={`${exchange ? 'bg-[#a7baff]' : 'bg-main'} p-3 dt:text-[20px]`}
          onClick={handleSave}
          disabled={exchange}
        >
          아낀 금액 저축
        </Button>
      </div>
    </div>
  );
};

export default ChallengeResultItem;
