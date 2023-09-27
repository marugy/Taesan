import React from 'react';

interface Props{
    id: number,
    img: string,
    name: string,
    price: number
}
interface PropsList {
  buyiflist:   Props[]
}

const BuyifList = ({buyiflist}:PropsList) => {

    return (
        <div className='flex flex-col gap-3 items-center '>
            {/* map 때려야함 */}
            <div className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                <img src="/dyson.jpg" className='h-[80%] aspect-square rounded-lg ' />
                <div className='flex flex-col justify-around h-[90%]'>
                    <div className='font-main text-lg'>다이슨 청소기</div>
                    <div className='font-main text-lg'>가격: ₩500,000원</div>
                </div>
                <div className='h-full flex items-center'>
                    <div className='font-main font-bold text-lg'> 100 X ☕</div>
                </div>
            </div>
            <div className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                <img src="/airpot.jfif" className='h-[80%] aspect-square rounded-lg ' />
                <div className='flex flex-col justify-around h-[90%]'>
                    <div className='font-main text-lg'>에어팟</div>
                    <div className='font-main text-lg'>가격: ₩300,000원</div>
                </div>
                <div className='h-full flex items-center'>
                    <div className='font-main font-bold text-lg'> 100 X ☕</div>
                </div>
            </div>
            <div className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                <img src="/phone.jfif" className='h-[80%] aspect-square rounded-lg ' />
                <div className='flex flex-col justify-around h-[90%]'>
                    <div className='font-main text-lg'>휴대폰</div>
                    <div className='font-main text-lg'>가격: ₩1,000,000원</div>
                </div>
                <div className='h-full flex items-center'>
                    <div className='font-main font-bold text-lg'> 100 X ☕</div>
                </div>
            </div>
            {buyiflist.map((buyif,index)=>(
                <div key={index} className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                    <img src={`https://j9c211.p.ssafy.io/api/ifbuy-management/ifbuys/image/${buyif.img}`} className='h-[80%] aspect-square rounded-lg ' />
                    <div className='flex flex-col justify-around h-[90%]'>
                        <div className='font-main text-lg'>{buyif.name}</div>
                        <div className='font-main text-lg'>가격: ₩{buyif.price}원</div>
                    </div>
                    <div className='h-full flex items-center'>
                        <div className='font-main font-bold text-lg'> 100 X ☕</div>
                    </div>
                </div>
            ))}

            {/* <div className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                <img src="/Account/Shinhan.png" className='h-[80%] aspect-square rounded-lg ' />
                <div className='flex flex-col justify-around h-[90%]'>
                    <div>다이슨 청소기</div>
                    <div>가격:500,000원</div>
                </div>
                <div className='h-full flex items-center'>
                    <img src="/Account/Shinhan.png" className='h-[30%] aspect-square'/>
                    <div className='font-bold'> *50</div>
                </div>
            </div>
            <div className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                <img src="/Account/Shinhan.png" className='h-[80%] aspect-square rounded-lg ' />
                <div className='flex flex-col justify-around h-[90%]'>
                    <div>다이슨 청소기</div>
                    <div>가격:500,000원</div>
                </div>
                <div className='h-full flex items-center'>
                    <img src="/Account/Shinhan.png" className='h-[30%] aspect-square'/>
                    <div className='font-bold'> *50</div>
                </div>
            </div>
            <div className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                <img src="/Account/Shinhan.png" className='h-[80%] aspect-square rounded-lg ' />
                <div className='flex flex-col justify-around h-[90%]'>
                    <div>다이슨 청소기</div>
                    <div>가격:500,000원</div>
                </div>
                <div className='h-full flex items-center'>
                    <img src="/Account/Shinhan.png" className='h-[30%] aspect-square'/>
                    <div className='font-bold'> *50</div>
                </div>
            </div> */}
        </div>
    );
};

export default BuyifList;