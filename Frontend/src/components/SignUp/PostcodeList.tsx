import React from 'react';
import { usePostcodePopup } from 'hooks/usePostcodePopup';

import TextField from '@mui/material/TextField';
import { Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';

interface Props {
  postcode: string;
  zonecode: string;
  detailPostcode: string;
  setPostcode: (value: string) => void;
  setZoncode: (value: string) => void;
  setDetailPostcode: (value: string) => void;
}

const PostcodeList = ({ postcode, zonecode, detailPostcode, setPostcode, setZoncode, setDetailPostcode }: Props) => {
  const open = usePostcodePopup();

  const handleComplete = (data: any) => {
    console.log('주소 입력', data);
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

    setPostcode(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setZoncode(data.zonecode);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  // 상세 주소 추가
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailPostcode(e.target.value);
  };

  return (
    <div className="space-y-2 border rounded-lg p-5">
      <div className="space-x-1 flex items-center">
        <Input type="text" label="우편번호" value={zonecode} className="" crossOrigin="anonymous" disabled />
        <Button type="button" className="bg-[#0067AC] h-10 w-24" onClick={handleClick}>
          찾기
        </Button>
      </div>
      <div className="gap-1 flex flex-col">
        <Input className="" type="text" label="주소" value={postcode} crossOrigin="anonymous" disabled />
        <Input className="" type="text" label="상세주소" onChange={onChange} crossOrigin="anonymous" />
      </div>
      <div className="text-xs text-gray-500">
        {zonecode} {postcode} {detailPostcode}
      </div>
    </div>
  );
};

export default PostcodeList;
