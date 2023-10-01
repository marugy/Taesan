import React, { useRef, useState,useEffect } from 'react';
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
import { useAssetStore} from 'store/AssetStore';
interface CardInfoProps {

  cardList: Array<any>;
}
const MainCardInfo: React.FC<CardInfoProps> = ({ cardList }) => {
  const { selectedCardId,setSelectedCardId } = useAssetStore();
  const { name } = useUserStore();
  // 컴포넌트가 마운트될 때 첫 번째 카드의 id 값을 설정해놓음.
  useEffect(() => {
    setSelectedCardId(cardList[0].cardId);
  }, []); 
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70vw] dt:w-[30vw] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          // swiper를 넘길 때마다 선택한 카드의 id값을 스토어에 저장.
          onSlideChange={(swiper:any)=> setSelectedCardId(cardList[swiper.realIndex].cardId)
          
          } 
        >
          {cardList.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full bg-back flex justify-center items-center">
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
