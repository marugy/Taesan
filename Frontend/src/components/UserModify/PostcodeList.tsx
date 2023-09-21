import React from 'react';
import { usePostcodePopup } from 'hooks/usePostcodePopup';

import TextField from '@mui/material/TextField';
import { Button } from '@material-tailwind/react';

interface Props {
  postcode: string;
  zonecode: string;
  detailPostcode: string;
  setPostCode: (value: string) => void;
  setZonCode: (value: string) => void;
  setDetailPostcode: (value: string) => void;
}

const PostcodeList = ({ postcode, zonecode, detailPostcode, setPostCode, setZonCode, setDetailPostcode }: Props) => {
  const open = usePostcodePopup();

  const handleComplete = (data: any) => {
    console.log(data);
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setPostCode(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setZonCode(data.zonecode);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  // 상세 주소 추가
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailPostcode(e.target.value);
  };

  return (
    <div className="space-y-2">
      <div className="space-x-1 flex items-center ">
        <TextField type="text" label="우편번호" value={zonecode} disabled />
        <Button type="button" className="bg-[#F1F5F5] h-10 text-[#8EB4B5]" onClick={handleClick}>
          찾기
        </Button>
      </div>
      <div className="space-x-1">
        <TextField type="text" label="주소" value={postcode} disabled />
        <TextField type="text" label="상세주소" onChange={onChange} />
      </div>
      <div className="text-xs text-gray-500">
        {zonecode} {postcode} {detailPostcode}
      </div>
    </div>
  );
};

export default PostcodeList;
