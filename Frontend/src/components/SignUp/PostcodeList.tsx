import React from 'react';
import { usePostcodePopup } from 'hooks/usePostcodePopup';

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
    <div>
      <div>
        w
        <input type="text" placeholder="우편번호" readOnly defaultValue={zonecode} />
        <button type="button" onClick={handleClick}>
          찾기
        </button>
      </div>
      <div>
        <input type="text" placeholder="주소" readOnly defaultValue={postcode} />
        <input type="text" placeholder="상세주소" onChange={onChange} />
      </div>
      <div>
        {zonecode} {postcode} {detailPostcode}
      </div>
    </div>
  );
};

export default PostcodeList;
