import React,{useState} from 'react';
import { Button } from "@material-tailwind/react";
import Swal from 'sweetalert2';
import ArrowBack from 'components/Common/ArrowBack';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useNavigate } from 'react-router';
import { Input } from 'antd';

const BuyifRegister = () => {
    const [buyifbot, setBuyifbot] = useState(false)
    const [changeProfileImage, setChangeProfileImage] = useState<File | null>(null);
    const [itemname, setItemname] = useState('')
    const [itemprice,setItemprice] = useState('')
    const { accessToken, refreshToken,setName } = useUserStore();
    const navigate = useNavigate()

    // 아무것도 안 보내면 사진이 안 바뀜.
    // else {
    //   formData.append('file', '');
    // }
    const postBuyif =() => {
        const formData = new FormData();
        const info ={
            name: itemname,
            price: itemprice,
          };

        formData.append('info', new Blob([JSON.stringify(info)], { type: 'application/json' }));
        if (changeProfileImage) {
          formData.append('images', changeProfileImage);
        }

        if (itemname === '') {
            Swal.fire({
              icon: 'warning',
              title: '사고 싶은 물건이름을 입력해주세요',
            });
          }
        else if(itemprice === ''){
            Swal.fire({
                icon: 'warning',
                title: '물건의 가격을 입력해주세요',
              }); 
        }
        else{
        axios
        .post('https://j9c211.p.ssafy.io/api/ifbuy-management/ifbuys',formData,
        {
            headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              } 
        })
        .then((respone)=>{
            console.log(respone)
            console.log(FormData)
            navigate('/buyif')
        })
        .catch((error)=>{
            console.log(error)
            console.log(FormData)
        })
    }
    }
    const handleItemnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemname(event.target.value);
      };
    const handleItempriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemprice(event.target.value);
    };
    const handleAnalys = () =>{
        if (itemname === '') {
            Swal.fire({
              icon: 'warning',
              title: '사고 싶은 물건이름을 입력해주세요',
            });
          }
        else if(itemprice === ''){
            Swal.fire({
                icon: 'warning',
                title: '물건의 가격을 입력해주세요',
              }); 
        }
        else{
            setBuyifbot(true)
        } 
    }


    return (
        <div className='flex flex-col h-screen'>
            <ArrowBack pageName='샀다치고'/>
            <div className='flex flex-col items-center'>
            <div className='font-bold text-xl w-[90%] text-start my-4'>샀다고 할 물건</div>
                <div className='bg-white w-[90%] h-[220px] rounded-lg shadow-md flex flex-col justify-around items-center'>
                    <div className='flex w-full justify-around items-center'>
                        <div className="flex justify-center h-[80%] aspect-square  " onClick={() => document.getElementById('file-input')?.click()}>
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
                                <div style={{ backgroundImage: `url(${URL.createObjectURL(changeProfileImage)})`, backgroundSize: '100% 100%' }} className='w-full h-full rounded-md'/>
                            ) : (
                               
                                <div style={{ backgroundImage: 'url("/buyif.png")', backgroundSize: '100% 100%' }} className='w-full h-full rounded-md'/>
                            )}
                        </div>
                    <div className='w-[50%] gap-2'>
                        <div>내가 사고 싶은 물건</div>
                        <Input  placeholder="내가 사고 싶은 물건" onChange={handleItemnameChange} />
                        <div>물건 가격</div>
                        <Input  placeholder="물건 가격" type='number' onChange={handleItempriceChange} />
                    </div>
                </div>
                <div className='w-[90%] flex justify-end gap-6'>
                    <Button variant='gradient' color='blue' onClick={handleAnalys}>
                        <span>사도 될까요?</span>
                    </Button>
                    <Button variant='gradient' color='blue' onClick={postBuyif}>
                        <span>등록</span>
                    </Button>
                </div>
            </div>
            {buyifbot?
                <div className='w-full flex flex-col items-center gap-6'> 
                    <img src={'/buyifchatbot.png'} alt="chatbot" className='w-[40%] aspect-square my-6' />
                    <div className='text-2xl font-bold w-[80%] text-center'>현재 자산에 올바르지 않은 소비 같아요</div>
                </div>
                :null}
            </div>
        </div>
    );
};

export default BuyifRegister;