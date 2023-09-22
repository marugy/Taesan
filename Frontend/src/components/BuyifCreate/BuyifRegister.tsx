import React,{useState} from 'react';
import { Input,Button } from "@material-tailwind/react";


const BuyifRegister = () => {
    const [buyifbot, setBuyifbot] = useState(false)
    const [changeProfileImage, setChangeProfileImage] = useState<File | null>(null);

    const formData = new FormData();

    // formData.append('request', new Blob([JSON.stringify(info)], { type: 'application/json' }));
    if (changeProfileImage) {
      formData.append('file', changeProfileImage);
    }
    // 아무것도 안 보내면 사진이 안 바뀜.
    // else {
    //   formData.append('file', '');
    // }


    return (
        <div className='flex flex-col items-center h-screen'>
            <div className='font-bold text-xl w-[90%] text-start my-4'>샀다고 할 물건</div>
                <div className='bg-white w-[90%] h-[220px] rounded-lg shadow-md flex flex-col justify-around items-center'>
                    <div className='flex justify-around items-center'>
                    <div className='w-[20%]'>
                        <div className="flex justify-center h-[90%] aspect-square " onClick={() => document.getElementById('file-input')?.click()}>
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
                                <img src={URL.createObjectURL(changeProfileImage)} alt="buyif-image" className='rounded-md border border-blue-gray-100'/>
                            ) : (
                                <img
                                className="rounded-md"
                                src={'/buyif.png'}
                                alt="buyif-image"
                                />
                            )}
                        </div>
                    </div>
                    <div className='w-[50%] gap-2'>
                        <div>내가 사고 싶은 물건</div>
                        <Input size="lg" label="내가 사고 싶은 물건"  crossOrigin="anonymous"/>
                        <div>물건 가격</div>
                        <Input size="lg" label="물건 가격"  crossOrigin="anonymous"/>
                    </div>
                </div>
                <div className='w-[90%] flex justify-end gap-6'>
                    <Button variant='gradient' color='blue' onClick={()=>{setBuyifbot(true)}}>
                        <span>사도 될까요?</span>
                    </Button>
                    <Button variant='gradient' color='blue'>
                        <span>등록</span>
                    </Button>
                </div>
            </div>
            {buyifbot?
                <div className='w-full flex flex-col items-center gap-6'> 
                    <img src={'/buyifchatbot.png'} alt="chatbot" className='w-[40%] aspect-square my-6' />
                    <div className='text-2xl font-bold w-[80%]'>고민 고민하지마 girl~ girl 헤이 유고걸 데레레레레레 뎃걸</div>
                </div>
                :null}
        </div>
    );
};

export default BuyifRegister;