import React, { useRef, useState } from 'react';
import { Button } from '@material-tailwind/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import Card from 'components/Common/Card';
import './MainCardInfo.css';
const MainCardInfo = () => {
  const dummyData = [
    {
      cardnumber: 9,
      name: '신한카드',
      assetnumber: '1234-1234-1234-1234',
    },
    {
      cardnumber: 8,
      name: '신한카드',
      assetnumber: '1234-1234-1234-1234',
    },
    {
      cardnumber: 3,
      name: '신한카드',
      assetnumber: '1234-1234-1234-1234',
    },
    {
      cardnumber: 4,
      name: '신한카드',
      assetnumber: '1234-1234-1234-1234',
    },
    {
      cardnumber: 5,
      name: '신한카드',
      assetnumber: '1234-1234-1234-1234',
    },
    {
      cardnumber: 6,
      name: '신한카드',
      assetnumber: '1234-1234-1234-1234',
    },
  ];
  return (
    <div className="w-full flex justify-center -mt-4">
      <div className="w-[70vw] dt:w-[19vw] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {dummyData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full bg-back flex justify-center items-center">
                <Card cardnumber={data.cardnumber} name={data.name} assetnumber={data.assetnumber} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainCardInfo;
