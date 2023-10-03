import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import ArrowBack from 'components/Common/ArrowBack';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useNavigate } from 'react-router';
import { Input } from 'antd';
import { Toast } from 'components/Common/Toast';
import { Pincode } from 'components/Common/Pincode';

const BuyifRegister = () => {
  const [buyifbot, setBuyifbot] = useState(false);
  const [changeProfileImage, setChangeProfileImage] = useState<File | null>(null);
  const [itemname, setItemname] = useState('');
  const [itemprice, setItemprice] = useState('');
  const [pincodeVisible, setPincodeVisible] = useState(false);
  const { accessToken, refreshToken, setName } = useUserStore();
  const navigate = useNavigate();

  // 아무것도 안 보내면 사진이 안 바뀜.
  // else {
  //   formData.append('file', '');
  // }
  const Buyif = () => {
    if (itemname === '') {
      Swal.fire({
        icon: 'warning',
        title: '사고 싶은 물건이름을 입력해주세요',
      });
    } else if (itemprice === '') {
      Swal.fire({
        icon: 'warning',
        title: '물건의 가격을 입력해주세요',
      });
    } else {
      Swal.fire({
        title: '티끌 적금',
        html: `<span>
                      <b>${itemname}
                      <br>
                       ￦ ${itemprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 
                       <br>
                       </b></span>
                       <br>
                       티끌적금통으로 송금하시겠습니까?`,
        icon: 'question',

        confirmButtonColor: '#0046ff',
        confirmButtonText: '송금',

        showCancelButton: true,
        cancelButtonColor: 'red',
        cancelButtonText: '취소',
      }).then((result) => {
        if (result.isConfirmed) {
          setPincodeVisible(true);
        }
      });
    }
  };
  const onCorrectPincode = () => {
    setPincodeVisible(false);
    // POST_결제 API
    const formData = new FormData();
    const info = {
      name: itemname,
      price: itemprice,
    };

    formData.append('info', new Blob([JSON.stringify(info)], { type: 'application/json' }));
    if (changeProfileImage) {
      formData.append('images', changeProfileImage);
    }
    axios
      .post('https://j9c211.p.ssafy.io/api/ifbuy-management/ifbuys', formData, {
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      })
      .then((respone) => {
        console.log(respone);
        console.log(FormData);
        Toast.fire({
          icon: 'success',
          title: '결제를 완료했습니다!',
        });
        navigate('/buyif');
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: '결제에 실패했습니다!',
        });
        navigate('/buyif');
        console.log(error);
        console.log(FormData);
      });
  };
  const handleItemnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemname(event.target.value);
  };
  const handleItempriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemprice(event.target.value);
  };
  const handleAnalys = () => {
    if (itemname === '') {
      Swal.fire({
        icon: 'warning',
        title: '사고 싶은 물건이름을 입력해주세요',
      });
    } else if (itemprice === '') {
      Swal.fire({
        icon: 'warning',
        title: '물건의 가격을 입력해주세요',
      });
    } else {
      setBuyifbot(true);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {pincodeVisible && <Pincode onCorrectPincode={onCorrectPincode} visibleFalse={() => setPincodeVisible(false)} />}
      <ArrowBack pageName="샀다치고" />
      <div className="flex flex-col items-center">
        <div className="font-bold text-xl w-[90%] text-start my-4">샀다고 할 물건</div>
        <div className="bg-white w-[90%] h-[220px] rounded-lg shadow-md flex flex-col justify-around items-center">
          <div className="flex w-full justify-around items-center">
            <div
              className="flex justify-center h-[80%] aspect-square  "
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <input
                type="file"
                id="file-input"
                accept="image/*"
                style={{
                  position: 'absolute',
                  opacity: 0,
                  width: 0,
                  height: 0,
                  overflow: 'hidden',
                }}
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    const selectedImage = e.target.files[0] as File;
                    setChangeProfileImage(selectedImage);
                    console.log(selectedImage);
                  }
                }}
              />
              {changeProfileImage ? (
                <div
                  style={{
                    backgroundImage: `url(${URL.createObjectURL(changeProfileImage)})`,
                    backgroundSize: '100% 100%',
                  }}
                  className="w-full h-full rounded-md"
                />
              ) : (
                <div
                  style={{ backgroundImage: 'url("/buyif.png")', backgroundSize: '100% 100%' }}
                  className="w-full h-full rounded-md"
                />
              )}
            </div>
            <div className="w-[50%] gap-2">
              <div>내가 사고 싶은 물건</div>
              <Input placeholder="내가 사고 싶은 물건" onChange={handleItemnameChange} />
              <div>물건 가격</div>
              <Input placeholder="물건 가격" type="number" onChange={handleItempriceChange} />
            </div>
          </div>
          <div className="w-[90%] flex justify-end gap-6">
            <Button variant="gradient" color="blue" onClick={handleAnalys}>
              <span>사도 될까요?</span>
            </Button>
            <Button variant="gradient" color="blue" onClick={Buyif}>
              <span>등록</span>
            </Button>
          </div>
        </div>
        {buyifbot ? (
          <div className="w-full flex flex-col items-center gap-6">
            <img src={'/buyifchatbot.png'} alt="chatbot" className="w-[40%] aspect-square my-6" />
            <div className="text-2xl font-bold w-[80%] text-center">현재 자산에 올바르지 않은 소비 같아요</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BuyifRegister;
