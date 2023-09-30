import React,{useEffect,useRef} from 'react';
import HistoryItem from './HistoryItem';
import { HistoryData } from 'types/HIstoryForm'
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";
import { Spin } from 'antd';

// import InfiniteScroll from 'react-infinite-scroll-component';

// interface PropstransactionDTOList{
//     transactionDTOList:{
//         afterTransAmt: number,
//         approvedAmount: number,
//         approvedId: number,
//         cardType: string,
//         category: string,
//         dateTime: string,
//         shopName: string,
//         shopNumber: string,
//         transactionId: number
//         }[],
//         fetchNextPage: () => void
//         hasNextPage:string,
//         isFetching:string
// }
interface PropstransactionDTOList{
    transactionDTOList:{
        approved_num: string,
		approved_dtime: string,
		status: string,
		pay_type: string,
		trans_dtime:string,
		merchant_name: string,
		merchant_regno: string,
		approved_amt: number,
		modified_amt: number,
		total_install_cnt: number
        }[],
        fetchNextPage: () => void
        hasNextPage:boolean,
        isFetching:boolean
}

const HistoryList = ({transactionDTOList,fetchNextPage,hasNextPage,isFetching}:PropstransactionDTOList) => {
    const navigate = useNavigate()
    const bottomRef = useRef(null);
    useEffect(() => {
        const options = {
          root: null, // viewport를 기준으로 감시
          rootMargin: '0px',
          threshold: 0.01, // 하단 10% 지점까지 스크롤되면 감지
        };
    
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting && hasNextPage && !isFetching) {
            fetchNextPage();
          }
        }, options);
    
        if (bottomRef.current) {
          observer.observe(bottomRef.current);
        }
    
        // Observer 해제
        return () => {
          observer.disconnect();
        };
      }, [fetchNextPage, hasNextPage, isFetching]);
    return (
        <div className='flex flex-col items-center'>
            <div className='text-2xl font-bold ml-14 mb-2 mt-3 w-full'>
                거래 내역 
            </div>
            <div className='w-[86%]'>
                {transactionDTOList.map((transaction,index)=>(
                    <div key={index} onClick={()=>{navigate(`/history/detail/${1}`)}}>
                        {/* <HistoryItem 
                            category={transaction.category} 
                            dateTime={transaction.dateTime} 
                            shopName={transaction.shopName} 
                            approvedAmount={transaction.approvedAmount}
                            afterTransAmt={transaction.afterTransAmt}/> */}
                        <HistoryItem 
                        category={'하위'} 
                        dateTime={transaction.approved_dtime} 
                        shopName={transaction.merchant_name} 
                        approvedAmount={transaction.approved_amt}
                        afterTransAmt={transaction.modified_amt}/>
                        <hr className='mt-1'/>
                    </div>
                ))}
                <div className='w-full h-10 flex justify-center'>
                    {hasNextPage ? (
                        <div>
                            {isFetching ? <Spin /> : null}
                        </div>
                        ) : (
                        <div>
                            더 불러올 정보가 없어요
                        </div>
                    )}
                </div>
                <div  ref={bottomRef} className='h-[80px]'></div>
            </div>
        </div>
    );
};

export default HistoryList;