import React,{useState} from 'react';
import {Avatar,ListItemPrefix,Typography,Button,Input} from '@material-tailwind/react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleButton from '@mui/material/ToggleButton';
import axios from 'axios';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


const HistoryDetail = () => {
    const [analys, setAnalys] = useState(false)
    const [receiptImage, setReceiptImage] = useState<File | null>(null);
    const [clovaAnalys, setClovaAnalys] = useState({
        items: [
          {
            name: '영화관',
            price: '3000',
          },
          {
            name: '콘칩',
            price: '3000',
          },
          {
            name: '허니버터',
            price: '3000',
          },
        ],
      });
  
    const [editableItemIndex, setEditableItemIndex] = useState<number | null>(null);
  
    const handleEdit = (index: number) => {
      setEditableItemIndex(index);
    };
  
    const handleSave = (index: number) => {
      // Here you can update the item in the ClovaAnalys.items array
      // based on the index and the new values.
      setEditableItemIndex(null); // Exit edit mode
      console.log(clovaAnalys)
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string, index: number) => {
        const { value } = event.target;
        setClovaAnalys((prevState) => ({
          ...prevState,
          items: prevState.items.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
        }));
      };
    const handleAddItem = () => {
        // 기본 빈 항목을 생성하여 clovaAnalys에 추가
        const newItem = { name: '', price: '' };
        setClovaAnalys((prevState) => ({
          ...prevState,
          items: [...prevState.items, newItem],
        }));
        console.log(clovaAnalys)
      };
    const handleDelete = (index: number) => {
        // 해당 인덱스의 항목을 제거한 새 배열 생성
        const newItems = [...clovaAnalys.items];
        newItems.splice(index, 1);
    
        // clovaAnalys 상태를 업데이트하여 해당 항목을 삭제
        setClovaAnalys((prevState) => ({
          ...prevState,
          items: newItems,
        }));
      };
    
    
    return (
        <div className='flex flex-col items-center mt-3 '>
                {receiptImage? 
                <div className='w-[86%] flex flex-col items-center'>
                    <div className='w-full  flex justify-end'>
                        <button onClick={handleAddItem}><AddCircleIcon  color='primary' fontSize='large'/></button>
                    </div>
                    {clovaAnalys.items.map((item, index) => (
                        <div key={index} className='w-full flex justify-between items-center mt-2'>
                        <input
                            value={item.name}
                            className='w-[80px]'
                            disabled={editableItemIndex !== index}
                            onChange={(e) => handleInputChange(e, 'name', index)}
                        />
                        <input
                            type='number'
                            value={item.price}
                            className='w-[80px]'
                            disabled={ editableItemIndex !== index}
                            onChange={(e) => handleInputChange(e, 'price', index)}
                        />
                        {editableItemIndex === index ? (
                            <>
                            <button onClick={() => handleSave(index)}>
                                <DoneIcon color='success' fontSize='medium' />
                            </button>
                            </>
                        ) : (
                            <div>
                            <button onClick={() => handleEdit(index)}>
                                <EditIcon color='primary' fontSize='small' />
                            </button>
                            <button onClick={() => handleDelete(index)}>
                                <DeleteIcon color='error' fontSize='small' />
                            </button>
                            </div>
                        )}
                        </div>
                    ))}   
                    <div className='border-blue-gray-100 rounded-xl border mt-5 w-full'>
                            <Typography variant="h3" color="black" className='mx-3 my-2' >
                            분석 결과가 맞나요?
                            </Typography>
                            <Typography variant="h6" color="black" className='mx-3 my-1' >
                            촬영한 영수증이 자동 분석되었습니다.
                            </Typography>
                            <Typography variant="h6" color="black" className='mx-3 my-1'>
                            정보가 정확하게 분석되었나요?
                            </Typography>
                            <div className='w-full flex justify-center gap-4 my-4'>
                                <Button variant='gradient' color='blue'>
                                    <span>네 정확해요</span>
                                </Button>
                                <Button variant='gradient' color='gray'onClick={() => document.getElementById('file-input')?.click()}>
                                    <span>아니요 다시찍을래요</span>
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
                                            setReceiptImage(selectedImage);
                                            console.log(selectedImage);
                                        }
                                        }}
                                    />
                                </Button>
                            </div>
                        </div>
                </div>:
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
                    {analys? 
                    <div className='border-blue-gray-100 rounded-xl border mt-5 flex flex-col items-center w-full '>
                        <div className='mt-11 font-bold'>아직 분석한 결제 내역이 없습니다.</div>
                        <div className='mt-10 mb-6'>
                        <Button color="blue" onClick={() => document.getElementById('file-input')?.click()}>영수증 등록</Button>
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
                                        setReceiptImage(selectedImage);
                                        console.log(selectedImage);
                                    }
                                }}
                                />
                            {/* <button onClick={receiptAnlays}>확인</button> */}
                        </div>
                    </div>: null}
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
                    <div className='border-blue-gray-100 rounded-xl border mt-5 w-full mb-28'>
                        <Typography variant="h6" color="blue-gray" className='flex justify-between mx-4 my-4 text-m font-bold  '>
                            최근 3개월간 거래 내역
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className='flex justify-between mx-4 my-4 text-m font-bold w-[90%] text-blue-gray-500 '>
                            <div>거래 횟수:</div>
                            <div>총 거래 금액:</div>
                        </Typography>
                    </div>
                </div>
                } 
        </div>
    );
};

export default HistoryDetail;

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
// const receiptAnlays=()=>{
    //     const formData = new FormData();
    //     const info = {
        //         images:[
            //             {
                //                 format:'png',
                //                 name: 'meium',
                //                 data:null,
                //                 url:'https://kr.object.ncloudstorage.com/ocr-img/OCR_ko(1)REAN_ko(1).png'
                //             }
                //         ],
                //         version:'V1',
                //         requestId:'1',
                //         timestamp:new Date(),
                //         lang:'ko',
                //         resultType:'1',
                //     };
                //     formData.append('request', new Blob([JSON.stringify(info)], { type: 'application/json' }));
                //     if (receiptImage) {
                    //       formData.append('file', receiptImage);
                    //     }
                    //     axios
                    //     .post('https://y50y88z4me.apigw.ntruss.com/custom/v1/25160/a3a6a2f8b9873fdb25da734a3d975d911ca56e52a54142cd3e6418faab6c7a6d/general', 
                    //     info,{
                        //         headers: {
                            //           'Content-Type':'application/json',
                            //           'X-OCR-SECRET':'TWFGdVNjZ2lWSFBhUW9SS1ZPTVhocmVaTU5aQ1poblI=',
                            //         },
                            //       })
                            //       .then((response)=>{
                                //         console.log(response)
                                //         console.log('제발')
                                //       })
                                //       .catch((error)=>{
                                    //         console.log(error)
                                    //         console.log('응아니야')
                                    //         console.log(info)
                                    //       })
                                    // }