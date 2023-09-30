import React from 'react';
import {Avatar,ListItemPrefix,Typography} from '@material-tailwind/react'

interface Propstransaction{
    afterTransAmt: number,
    approvedAmount: number,
    category: string,
    dateTime: string,
    shopName: string,
}

const HistoryItem = ({category,dateTime,shopName,approvedAmount,afterTransAmt}:Propstransaction) => {
    return (
        <div className='w-full flex justify-between mt-2'>
            <ListItemPrefix>
                <Avatar variant="square" className="p-1" alt="candice" src={`.png`} />
            </ListItemPrefix>
            <div className="w-full flex justify-between">
                <div>
                <Typography variant="h6" color="blue-gray">
                    영화관{shopName}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    08:13{dateTime}
                </Typography>
                </div>
                <div>
                    <Typography variant="h6" color="green" className="text-end">
                    3,000원{approvedAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </Typography>
                    <Typography variant="small" color="blue-gray" className="font-normal text-end">
                      3,000원{afterTransAmt}
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
    );
};

export default HistoryItem;