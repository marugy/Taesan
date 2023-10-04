import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import Swal2 from 'sweetalert2';
import ArrowBack from 'components/Common/ArrowBack';
import Card from 'components/Common/Card';
import { useUserStore } from 'store/UserStore';
import axios from 'axios';

interface CardRegisterProps {
  cardList: Array<any>;
}
const CardRegister: React.FC<CardRegisterProps> = ({ cardList }) => {
  const navigate = useNavigate();
  const { name } = useUserStore();
  return (
    <div>
      <ArrowBack pageName="카드 불러오기" />
      <div className="text-center my-10">
        <Typography variant="h5" color="blue-gray">
          '태산' 사용을 위해
        </Typography>
        <Typography variant="h5" color="blue-gray">
          회원님의 카드 목록을 불러 왔습니다.
        </Typography>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        {cardList.map((card, index) => (
          <Card
            cardId={card.cardId}
            cardCompany={card.cardCompany}
            cardNumber={card.cardNumber}
            cardType={`${card.cardName}`}
            main=""
            name={name}
          />
        ))}
      </div>
      {/* <div className="text-center mt-10">
        <Button
          color="blue"
          onClick={() => {
            Swal2.fire({
              icon: 'success',
              title: '자산 연동이 완료되었습니다.',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              navigate('/main');
            });
          }}
        >
          자산 연동하기
        </Button>
      </div> */}
    </div>
  );
};

export default CardRegister;
