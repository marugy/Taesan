import React from 'react';
import HistoryItem from './HistoryItem';
import { HistoryData } from 'types/HIstoryForm'
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";


const HistoryList = () => {
    const navigate = useNavigate()
    
    

    return (
        <div className='flex flex-col items-center'>
            <div className='text-2xl font-bold ml-14 mb-2 mt-3 w-full'>
                거래 내역 
            </div>
            <div className='w-[86%]'>
                <div onClick={()=>{navigate(`/history/detail/${1}`)}}>
                    <HistoryItem/>
                    <hr className='mt-1'/>
                </div>
            </div>
        </div>
    );
};

export default HistoryList;