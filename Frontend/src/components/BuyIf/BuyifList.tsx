import React from 'react';
import { Tooltip,Typography } from '@material-tailwind/react';
// interface Props{
//     id: number,
//     img: string,
//     name: string,
//     price: number
// }
interface PropsList {
  buyiflist:{
    id: number,
    img: string,
    name: string,
    price: number
  }[]
  mostbuy:string,
  mostbuyprice:number,
}


const BuyifList = ({buyiflist,mostbuy,mostbuyprice}:PropsList) => {

    return (
        <div className='flex flex-col gap-3 items-center '>
            {/* map 때려야함 */}
            {/* <div className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                <img src="/dyson.jpg" className='h-[80%] aspect-square rounded-lg ' />
                <div className='flex flex-col justify-around h-[90%]'>
                    <div className='font-main text-lg'>다이슨 청소기</div>
                    <div className='font-main text-lg'>가격: ₩500,000원</div>
                </div>
                <div className='h-full flex items-center'>
                    <div className='font-main font-bold text-lg flex items-center'> 100 X 
                        <div className='w-7 aspect-square'>
                            <img src={`/Mostbuy/${mostbuy}.png`} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            {buyiflist.map((buyif,index)=>(
                <div key={index} className='w-[90%] h-[100px] bg-blue-gray-50 rounded-md flex items-center justify-around' >
                    <img src={`https://j9c211.p.ssafy.io/api/ifbuy-management/ifbuys/image/${buyif.img}`} className='h-[80%] aspect-square rounded-lg ' />
                    <div className='flex flex-col justify-around h-[90%]'>
                        <div className='font-main text-lg'>{buyif.name}</div>
                        <div className='font-main text-lg'>가격: ₩{buyif.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
                    </div>
                  
                    <div className='h-full flex items-center'>
                        <div className='font-main font-bold text-lg flex items-center'> {Math.floor(buyif.price / mostbuyprice)} X 
                            <div className='w-7 aspect-square'>
                                <img src={`/Mostbuy/${mostbuy}.png`} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default BuyifList;