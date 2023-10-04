import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Toast } from 'components/Common/Toast';
import { NewPincode } from 'components/ChangePincode/NewPincode';
import { useUserStore } from 'store/UserStore';
import { Pincode } from 'components/ChangePincode/Pincode';
const ChangePincodePage = () => {
  const { accessToken, refreshToken } = useUserStore();
  const [pincodeVisible, setPincodeVisible] = useState(true);
  const [newPincodeVisble, setNewPincodeVisible] = useState(false);
  const [pincode, setPincode] = useState('');
  const [simplePassword, setSimplePassword] = useState('');

  const navigate = useNavigate();

  // 핀코드가 일치하면
  const onCorrectPincode = () => {
    setPincodeVisible(false);
    setNewPincodeVisible(true);
  };

  const onSubmit = () => {
    // 간편 비밀번호가 설정되면
    if (simplePassword !== '') {
      axios
        .put(
          'https://j9c211.p.ssafy.io/api/member-management/members/simple-password',
          {
            simplePassword: simplePassword,
          },
          {
            headers: {
              'ACCESS-TOKEN': accessToken,
              'REFRESH-TOKEN': refreshToken,
            },
          },
        )
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: '간편비밀번호 수정완료',
          });
          setNewPincodeVisible(false); // 핀코드 닫기
          navigate('/mypage');
        })
        .catch((err) => {
          console.log(err);
          setNewPincodeVisible(false);
          // navigate('/mypage');
        });
      console.log(simplePassword);
    }
  };

  useEffect(() => {
    if (simplePassword) {
      onSubmit();
      setSimplePassword('');
    }
  }, [simplePassword]);

  const handleClose = () => {
    navigate('/mypage');
  };

  return (
    <div className=" flex flex-col items-center">
      {pincodeVisible && <Pincode onCorrectPincode={onCorrectPincode} visibleFalse={() => setPincodeVisible(false)} />}
      {newPincodeVisble && (
        <NewPincode pincode={pincode} setPincode={setPincode} setSimplePassword={setSimplePassword} />
      )}
    </div>
  );
};

export default ChangePincodePage;
