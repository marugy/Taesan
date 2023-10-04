import React,{useEffect, useState} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ResponsivePie } from '@nivo/pie';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import dayjs from 'dayjs';
import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useAssetStore } from 'store/AssetStore';

interface CategoryData {
    infos: {
      id: string;
      label: string;
      value: number;
    }[];
    month: string,
    year: string
  }
const Graph = () => {
    // const data = [
    //     {
    //       "id": "대형마트",
    //       "label": "대형마트",
    //       "value": 40000,
    //     },
    //     {
    //       "id": "편의점",
    //       "label": "편의점",
    //       "value": 12300,
    //     },
    //     {
    //       "id": "음식점",
    //       "label": "음식점",
    //       "value": 45000,
    //     },
    //     {
    //       "id": "카페",
    //       "label": "카페",
    //       "value": 12200,
    //     },
    //     {
    //       "id": "여가",
    //       "label": "여가",
    //       "value": 16000,
    //     }
    //   ];
    const [category, setCategory] = useState<CategoryData>();
    const colortag = [' #a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00','#cab2d6','#6a3d9a',' #ffff99','#b15928'];
    const [tagnum, setTagnum] =useState(0)
    const [year, setYear] = useState(dayjs().format('YYYY'))
    const [month, setMonth] = useState('0');
    const {selectedCardId} = useAssetStore()
    const { accessToken, refreshToken} = useUserStore();
    const handleMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string);
      };
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTagnum(newValue)
    };
    
    const analyzePlace = () => {
        axios.post(`https://j9c211.p.ssafy.io/api/analyst-management/analysts/place/analyst`,
        {
            month:month,
            year:year
        },{
            headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
                } 
        })
        .then((res)=>{
            console.log(res.data.response.infos)
            setCategory(res.data.response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const analyzeReceipt = () => {
        axios.post(`https://j9c211.p.ssafy.io/api/analyst-management/analysts/receipt/analyst`,
        {
            month:month,
            year:year
        },{
            headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
                } 
        })
        .then((res)=>{
            console.log(res.data.response.infos)
            setCategory(res.data.response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        if(tagnum===0){
            analyzePlace()
        }
        if(tagnum===1){
            analyzeReceipt()
        }
        
    },[month,year,tagnum])
    const data = category?.infos || [];
    const totalValue = data.reduce((sum, item) => sum + item.value, 0);
    return (
        <div className='mx-4 mt-11 mb-28'>
            <div className=' font-bold text-blue-gray-600'>
                설정기간
            </div>
            <div className='flex items-center mt-4 gap-5'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label={'연도'} value={dayjs(year)} views={['year']} className='w-36' onChange={(newDate: dayjs.Dayjs | null) => {
              if (newDate) {
                setYear(newDate.format('YYYY'));
              }
            }}/>
                </LocalizationProvider>
                <Box sx={{ minWidth: 120 }} className='w-28'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">월</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={month}
                        label="Age"
                        onChange={handleMonthChange}
                        >
                        <MenuItem value={1}>1월</MenuItem>
                        <MenuItem value={2}>2월</MenuItem>
                        <MenuItem value={3}>3월</MenuItem>
                        <MenuItem value={4}>4월</MenuItem>
                        <MenuItem value={5}>5월</MenuItem>
                        <MenuItem value={6}>6월</MenuItem>
                        <MenuItem value={7}>7월</MenuItem>
                        <MenuItem value={8}>8월</MenuItem>
                        <MenuItem value={9}>9월</MenuItem>
                        <MenuItem value={10}>10월</MenuItem>
                        <MenuItem value={11}>11월</MenuItem>
                        <MenuItem value={12}>12월</MenuItem>
                        <MenuItem value={0}>전체</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className=' font-bold text-blue-gray-600 my-2'>
                카테고리 분류
            </div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={tagnum} onChange={handleChange} centered>
                    <Tab label="장소" />
                    <Tab label="상세 내역" />
                </Tabs>
            </Box>
            {data && data.length > 0? (
            <div>
                <div className='w-[100%] aspect-square'>
                    <ResponsivePie
                        data={data}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        startAngle={-180}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        activeOuterRadiusOffset={8}
                        colors={{ scheme: 'paired' }}
                        borderWidth={1}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    0.2
                                ]
                            ]
                        }}
                        enableArcLinkLabels={false}
                        arcLinkLabelsSkipAngle={10}
                        arcLabel="id"
                        arcLinkLabelsTextColor="#333333"
                        arcLinkLabelsThickness={2}
                        arcLinkLabelsColor={{ from: 'color' }}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    2
                                ]
                            ]
                        }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'ruby'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'c'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'go'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'python'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'scala'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'lisp'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'elixir'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'javascript'
                                },
                                id: 'lines'
                            }
                        ]}
                        legends={[]}
                        />
                    </div>
                    { tagnum === 0 ?
                        <div className='flex justify-center '>
                            <div className='text-white bg-main h-[8vh] w-[70%] text-xl flex justify-center items-center font-bold rounded-lg'>
                                <div>자주 소비하는 장소</div>
                            </div>
                        </div>
                        :
                        <div className='flex justify-center '>
                            <div className='text-white bg-main h-[8vh] w-[70%] text-xl flex justify-center items-center font-bold rounded-lg'>
                                <div>자주 소비하는 카테고리</div>
                            </div>
                        </div>}
                    <div className='w-full flex flex-col items-center mt-4'>
                        {data.map((res,index)=>(
                            <div key={index} className='flex items-center h-[16px] my-5 w-[90%] justify-between'>
                                <div className='flex gap-4 items-center'>
                                    <div style={{ backgroundColor: colortag[index%12], height: '10px', width: '10px', marginRight: '5px' }}/>
                                    <Typography variant="h6" color="blue-gray" className="font-normal text-end text-m font-bold text-xl">
                                        {res.id}
                                    </Typography>
                                </div>
                                <div className='flex gap-4'>
                                    <Typography variant="h6" color="blue-gray" className="font-normal text-end text-m font-bold text-blue-gray-500 text-xl">
                                        {(res.value / totalValue * 100).toFixed(2)}%
                                    </Typography>
                                    <Typography variant="h6" color="blue-gray" className="font-normal text-end text-m font-bold text-xl">
                                        {res.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    <div className='h-[100px]'/>
                </div>
            </div>):(<div className='w-full flex justify-center items-center h-48'>{tagnum===0?(<Typography variant="h4" color="black" className='w-fit' >소비내역이 없어요</Typography>):(<Typography variant="h4" color="black" className='w-fit' >등록된 영수증이 없어요</Typography>)}</div>)}

        </div>
    );
};

export default Graph;