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
import { useUserStore } from 'store/UserStore';
interface CardInfoProps {

  cardList: Array<any>;
}
const MainCardInfo: React.FC<CardInfoProps> = ({ cardList }) => {
  const { name } = useUserStore();
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70vw] dt:w-[30vw] ">
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
          {cardList.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full bg-back flex justify-center items-center">
                {/* <Card cardnumber={data.cardId} name={data.cardCompany} assetnumber={data.cardCompany} main="1" /> */}
                <Card
                  cardId={data.cardId}
                  cardCompany={data.cardCompany}
                  cardNumber={data.cardNumber}
                  cardType={data.cardType}
                  main="1"
                  name={name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainCardInfo;
