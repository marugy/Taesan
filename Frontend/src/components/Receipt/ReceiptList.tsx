import React from 'react';
import ReceiptItem from './ReceiptItem';

const ReceiptList = () => {
    return (
        <div>
            <button>+</button>
            <div>
                <input type="text" placeholder='구매물품' />
                <input type="text" placeholder='금액' />
                <button>추가</button>
            </div>
            <div>
                map(<ReceiptItem/>)
                setAmount setGoods 함수 props 로 넘기기
            </div>

            <div>
                <h2>분석 결과가 맞나요?</h2> 
                촬영한 영수증이 자동 분석되었습니다.
                정보가 정확하게 분석 되었나요?
                <button>네 정확해요</button>
                <button>아니요 다시 찍을게요</button>
            </div>
        </div>
    );
};

export default ReceiptList;