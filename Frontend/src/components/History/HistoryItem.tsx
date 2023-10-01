import React from 'react';
import {Avatar,ListItemPrefix,Typography} from '@material-tailwind/react'
import dayjs from 'dayjs';

interface Propstransaction{
    approvedAmount: number,
    category: string,
    dateTime: string,
    shopName: string,
}

const HistoryItem = ({category,dateTime,shopName,approvedAmount}:Propstransaction) => {
    return (
        <div className='w-full flex justify-between mt-2'>
            <ListItemPrefix>
                <Avatar variant="square" className="p-1" alt="candice" src={`.png`} />
            </ListItemPrefix>
            <div className="w-full flex justify-between">
                <div>
                <Typography variant="h6" color="blue-gray">
                    {shopName}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    {dayjs(dateTime).format("HH:mm ")}
                </Typography>
                </div>
                <div>
                    <Typography variant="h6" color="red" className="text-end">
                    {approvedAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default HistoryItem;