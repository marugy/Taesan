import React from 'react';
import HistoryItem from './HistoryItem';


const HistoryList = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='text-2xl font-bold ml-14 mb-2 mt-3 w-full'>
                거래 내역 
            </div>
            <div className='w-[86%]'>
            <div className='text-xl font-bold mt-3'> 8월 08일</div>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <div className='text-xl font-bold mt-3'> 8월 08일</div>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <div className='text-xl font-bold mt-3'> 8월 08일</div>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <div className='text-xl font-bold mt-3'> 8월 08일</div>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <div className='text-xl font-bold mt-3'> 8월 08일</div>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            <HistoryItem/>
            <hr className='mt-1'/>
            </div>
        </div>
    );
};

export default HistoryList;