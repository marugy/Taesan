import React,{useState} from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
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

const Graph = () => {
    const data = [
        {
          "id": "go",
          "label": "go",
          "value": 409,
          "color": "hsl(288, 70%, 50%)"
        },
        {
          "id": "c",
          "label": "c",
          "value": 132,
          "color": "hsl(260, 70%, 50%)"
        },
        {
          "id": "scala",
          "label": "scala",
          "value": 283,
          "color": "hsl(26, 70%, 50%)"
        },
        {
          "id": "javascript",
          "label": "javascript",
          "value": 446,
          "color": "hsl(204, 70%, 50%)"
        },
        {
          "id": "sass",
          "label": "sass",
          "value": 65,
          "color": "hsl(105, 70%, 50%)"
        }
      ];
    const [category, setCategory] = useState('');
    const colortag = [' #7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'];
    const [tagnum, setTagnum] =useState(0)
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('');
    const handleMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string);
      };
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        const newCategory = newValue === 0 ? 'hi' : 'bye';
        setTagnum(newValue)
        setCategory(newCategory);
    };
    return (
        <div className='mx-4'>
            <div className=' font-bold text-blue-gray-600'>
                설정기간
            </div>
            <div className='flex items-center mt-4 gap-5'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label={'연도'} views={['year']} className='w-36' onChange={(newDate: dayjs.Dayjs | null) => {
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
                        <MenuItem value={'All'}>전체</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            {year}{month}{category}
            <div className=' font-bold text-blue-gray-600 my-2'>
                카테고리 분류
            </div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={tagnum} onChange={handleChange} centered>
                    <Tab label="장소" />
                    <Tab label="상세 내역" />
                </Tabs>
            </Box>
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
            {/* {category?.list.map((tag, index) => (
                <div className='flex items-center h-[16px]'>
                    <div style={{ backgroundColor: colortag[index], height: '10px', width: '10px', marginRight: '5px' }}></div>
                    {tag.id} : {((tag.value / category.sum) * 100).toFixed(1)}%
                </div>
             ))} */}
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
            
            <div className='flex items-center h-[16px] my-5'>
                <div style={{ backgroundColor: '#7fc97f', height: '10px', width: '10px', marginRight: '5px' }}></div>
                담배 : 300000원
            </div>
            <div className='flex items-center h-[16px] my-5'>
                <div style={{ backgroundColor: '#7fc97f', height: '10px', width: '10px', marginRight: '5px' }}></div>
                담배 : 300000원
            </div>
            <div className='flex items-center h-[16px] my-5'>
                <div style={{ backgroundColor: '#7fc97f', height: '10px', width: '10px', marginRight: '5px' }}></div>
                담배 : 300000원
            </div>
            <div className='flex items-center h-[16px] my-5'>
                <div style={{ backgroundColor: '#7fc97f', height: '10px', width: '10px', marginRight: '5px' }}></div>
                담배 : 300000원
            </div>
            
        </div>
    );
};

export default Graph;