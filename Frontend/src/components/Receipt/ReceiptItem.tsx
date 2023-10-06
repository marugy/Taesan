import React from 'react';

const ReceiptItem = () => {
    return (
        <div>
            <div>
                <div>00커피</div> <div>W5000원</div> <button>수정</button>
            </div>
            <div>
                <input type="text" placeholder='구매 물품' /> <input type="text" placeholder='금액' />
                <button>수정 완료</button><button>삭제</button>
                삭제 함수 수정 함수 props로 받기 setGoods setAmount
            </div>
        </div>
    );
};

export default ReceiptItem;