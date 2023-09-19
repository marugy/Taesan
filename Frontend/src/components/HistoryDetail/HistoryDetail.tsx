import React,{useState} from 'react';
import {Avatar,ListItemPrefix,Typography,Button} from '@material-tailwind/react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleButton from '@mui/material/ToggleButton';

const HistoryDetail = () => {
    const [analys, setAnalys] = useState(false)

    return (
        <div className='flex flex-col items-center mt-24'>
            <div className='w-[86%] flex flex-col items-center'>
                <div className='w-full flex justify-between mt-2'>
                    <ListItemPrefix>
                        <Avatar variant="square" className="p-1" alt="candice" src={`.png`} />
                    </ListItemPrefix>
                    <div className="w-full flex justify-between">
                        <div className='flex items-center'>
                            <Typography variant="h6" color="blue-gray">
                                영화관
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6" color="green" className="text-end">
                            3,000원
                            </Typography>
                            <Typography variant="small" color="blue-gray" className="font-normal text-end">
                            3,000원
                            </Typography>
                        {/* {transaction.type === 1 ? (
                            // 원단위 절삭
                            <Typography variant="h6" color="green" className="text-end">
                            {transaction.depositAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                            </Typography>
                        ) : (
                            <Typography variant="h6" color="red" className="text-end">
                            {transaction.withdrawAmount === undefined
                                ? '0원'
                                : `-${transaction.withdrawAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
                            </Typography>
                        )}
                        <Typography variant="small" color="blue-gray" className="font-normal text-end">
                            {transaction.transactionBalance === undefined
                            ? '0원'
                            : `${transaction.transactionBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
                        </Typography> */}
                        </div>
                    </div>
                </div>
                <div className='flex items-center mt-6 w-full'>
                    <ToggleButton
                    className='bg-black'
                    value="check"
                    selected={analys}
                    onChange={() => {
                        setAnalys(!analys);
                    }}
                    >
                        <ExpandMoreIcon />
                    </ToggleButton>
                    <div className='ml-4 font-bold'>
                    결재 내역 분석하기
                    </div>
                </div>
                <div className='border-blue-gray-100 rounded-xl border mt-5 flex flex-col items-center w-full '>
                    <div className='mt-11 font-bold'>아직 분석한 결제 내역이 없습니다.</div>
                    <div className='mt-10 mb-6'>
                    <Button color="blue">영수증 등록</Button>
                    </div>
                </div>
                <div className='border-blue-gray-100 rounded-xl border mt-12 w-full'>
                    <div className=' flex justify-between mt-2 mx-5'>
                        <ListItemPrefix>
                            <Avatar variant="square" className="p-1" alt="candice" src={`.png`} />
                        </ListItemPrefix>

                        <div className='flex items-center'>
                            <Typography variant="h6" color="blue-gray">
                                카테고리: 영화관
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className='border-blue-gray-100 rounded-xl border mt-5 w-full'>
                    <Typography variant="h6" color="blue-gray" className='flex justify-between mx-4 my-4 text-lg font-bold '>
                        <div>거래 일시 :</div>
                        <div>8월 29일</div>
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className='flex justify-between mx-4 my-4 text-lg font-bold '>
                        <div>사용처 :</div>
                        <div>알빠노</div>
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className='flex justify-between mx-4 my-4 text-lg font-bold '>
                        <div>결제 수단 :</div>
                        <div>카드</div>
                    </Typography>                    
                </div>
                <div className='border-blue-gray-100 rounded-xl border mt-5 w-full'>
                    최근 3개월간 거래 내역
                </div>
            </div>
        </div>
    );
};

export default HistoryDetail;