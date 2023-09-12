import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { DAUM_POSTCODE } from 'constants/UserModify';

interface Props {
  postcode: string;
  setPostCode: (value: string) => void;
  zonecode: string;
  setZonCode: (value: string) => void;
  detailPostcode: string;
  setDetailPostcode: (value: string) => void;
}

const PostcodeList = ({ postcode, setPostCode, zonecode, setZonCode, detailPostcode, setDetailPostcode }: Props) => {
  const open = useDaumPostcodePopup(DAUM_POSTCODE);

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
  const handleDetailPostcode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailPostcode(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="우편번호" value={zonecode} />
        <button type="button" onClick={handleClick}>
          찾기
        </button>
      </div>
      <div>
        <input type="text" placeholder="주소" value={postcode} />
        <input type="text" placeholder="상세주소" onChange={handleDetailPostcode} />
      </div>
      <div>
        {zonecode} {postcode} {detailPostcode}
      </div>
    </div>
  );
};

export default PostcodeList;
