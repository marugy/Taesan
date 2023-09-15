import React from 'react';

import { useNavigate } from 'react-router';
import {
  postJoin,
  postLogin,
  postSimpleLogin,
  getInfo,
  putInfo,
  putPassword,
  putSimplePassword,
  getSaving,
  deleteMember,
} from 'api/member';
import { postPlace, postReceipt } from 'api/analyst';
import { postIdCheck, postSmsSend, postSimplePasswordCheck, postPasswordCheck } from 'api/auth';
import {
  postNewChallenge,
  getExpireChallenge,
  getStateChallenge,
  postJoinChallenge,
  postExitChallenge,
  postStartChallenge,
  getRecruitChallenge,
  getProgressChallenge,
  postTransfer,
} from 'api/challenges';
import {
  getTotalCalendarMonth,
  getTotalCalendarDay,
  getBuying,
  postNewHabit,
  getProgress,
  putHabitEnd,
  getHabitComplete,
  getHabitDetail,
  getHabitCalendar,
  getHabitToday,
  postSavingToday,
} from 'api/habits';

import { getBuyIf, postBuyIf, getPos } from 'api/ifbuys';
import { getHistory, getTransactionDetail, getTransactionReceipt } from 'api/transactions';

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>백엔드와의 Axios 통신을 위한 테스트 페이지 🛠</h1>

        <button
          style={{
            backgroundColor: '#258FFF',
            height: '20vh',
            width: '30vw',
            borderRadius: '20px',
            border: 'none',
            color: 'white',
            fontSize: '40px',
          }}
          onClick={() => navigate('/main')}
        >
          메인 페이지로 이동
        </button>
      </div>
      <hr />
      <div>
        <div>
          <h1>Axios 통신 리스트</h1>
          <h2>ANALYST 관련 AXIOS 통신 테스트</h2>
          {/* postPlace,postReceipt */}
          <button onClick={postPlace}>장소 등록</button>
          <button onClick={postReceipt}>영수증 등록</button>
          <hr></hr>
          <h2>AUTH 관련 AXIOS 통신 테스트</h2>
          {/* postIdCheck,postSmsSend,postSimplePasswordCheck,postPasswordCheck */}
          <button onClick={postIdCheck}>아이디 중복 확인</button>
          <button onClick={postSmsSend}>SMS 인증번호 발송</button>
          <button onClick={postSimplePasswordCheck}>간편 비밀번호 확인</button>
          <button onClick={postPasswordCheck}>비밀번호 확인</button>

          <hr></hr>
          <h2>CHALLENGES 관련 AXIOS 통신 테스트</h2>
          {/* postNewChallenge, getExpireChallenge, getStateChallenge,postJoinChallenge,
        postExitChallenge,postStartChallenge,getRecruitChallenge,getProgressChallenge,postTransfer */}
          <button onClick={postNewChallenge}>도전 등록</button>
          <button onClick={getExpireChallenge}>만료된 도전 조회</button>
          <button onClick={getStateChallenge}>진행중인 도전 조회</button>
          <button onClick={postJoinChallenge}>도전 참가</button>
          <button onClick={postExitChallenge}>도전 탈퇴</button>
          <button onClick={postStartChallenge}>도전 시작</button>
          <button onClick={getRecruitChallenge}>모집중인 도전 조회</button>
          <button onClick={getProgressChallenge}>진행중인 도전 조회</button>
          <button onClick={postTransfer}>적립금 이체</button>
          <hr></hr>
          <h2>HABITS 관련 AXIOS 통신 테스트</h2>
          {/* getTotalCalendarMonth,getTotalCalendarDay,getBuying,postNewHabit,getProgress,putHabitEnd,getHabitComplete,getHabitDetail,getHabitCalendar,getHabitToday,postSavingToday */}
          <button onClick={() => getTotalCalendarMonth('1', '1')}>월별 총 적립금 조회</button>
          <button onClick={() => getTotalCalendarDay('1', '1', '1')}>일별 적립금 조회</button>
          <button onClick={getBuying}>구매 내역 조회</button>
          <button onClick={postNewHabit}>습관 등록</button>
          <button onClick={getProgress}>진행중인 습관 조회</button>
          <button onClick={putHabitEnd}>습관 종료</button>
          <button onClick={getHabitComplete}>완료된 습관 조회</button>
          <button onClick={getHabitDetail}>습관 상세 조회</button>
          <button onClick={() => getHabitCalendar('1', '1')}>습관 캘린더 조회</button>
          <button onClick={getHabitToday}>오늘의 습관 조회</button>
          <button onClick={postSavingToday}>오늘의 적립금 조회</button>

          <hr></hr>
          <h2>IFBUYS 관련 AXIOS 통신 테스트</h2>
          {/* getBuyIf, postBuyIf, getPos */}
          <button onClick={getBuyIf}>구매 내역 조회</button>
          <button onClick={postBuyIf}>구매 등록</button>
          <button onClick={getPos}>POS 조회</button>
          <hr></hr>
          <h2>MEMBER 관련 AXIOS 통신 테스트</h2>
          {/* postJoin,postLogin,postSimpleLogin,getInfo,putInfo,putPassword,putSimplePassword,getSaving,deleteMember */}
          <button onClick={postJoin}>회원가입</button>
          <button onClick={postLogin}>로그인</button>
          <button onClick={postSimpleLogin}>간편 로그인</button>
          <button onClick={getInfo}>회원 정보 조회</button>
          <button onClick={putInfo}>회원 정보 수정</button>
          <button onClick={putPassword}>비밀번호 수정</button>
          <button onClick={putSimplePassword}>간편 비밀번호 수정</button>
          <button onClick={getSaving}>적립금 조회</button>
          <button onClick={deleteMember}>회원 탈퇴</button>

          <hr></hr>
          <h2>TRANSATIONS 관련 AXIOS 통신 테스트</h2>
          {/* getHistory,getTransactionDetail,getTransactionReceipt */}
          <button onClick={getHistory}>거래 내역 조회</button>
          <button onClick={getTransactionDetail}>거래 상세 조회</button>
          <button onClick={getTransactionReceipt}>거래 영수증 조회</button>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
