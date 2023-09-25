import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@material-tailwind/react'; // Material-UI의 Button을 가져옵니다.
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

        <Button color="blue" onClick={() => navigate('/main')}>
          메인 페이지로 이동
        </Button>
      </div>
      <hr />
      <div>
        <div>
          <h1>Axios 통신 리스트</h1>
          <h2>ANALYST 관련 AXIOS 통신 테스트</h2>
          {/* <Button onClick={postPlace}>장소 등록</Button>
          <Button onClick={postReceipt}>영수증 등록</Button>
          <hr></hr>
          <h2>AUTH 관련 AXIOS 통신 테스트</h2>
          <Button onClick={postIdCheck}>아이디 중복 확인</Button>
          <Button onClick={postSmsSend}>SMS 인증번호 발송</Button>
          <Button onClick={postSimplePasswordCheck}>간편 비밀번호 확인</Button>
          <Button onClick={postPasswordCheck}>비밀번호 확인</Button>
          <hr></hr>
          <h2>CHALLENGES 관련 AXIOS 통신 테스트</h2>
          <Button onClick={postNewChallenge}>도전 등록</Button>
          <Button onClick={getExpireChallenge}>만료된 도전 조회</Button>
          <Button onClick={getStateChallenge}>진행중인 도전 조회</Button>
          <Button onClick={postJoinChallenge}>도전 참가</Button>
          <Button onClick={postExitChallenge}>도전 탈퇴</Button>
          <Button onClick={postStartChallenge}>도전 시작</Button>
          <Button onClick={getRecruitChallenge}>모집중인 도전 조회</Button>
          <Button onClick={getProgressChallenge}>진행중인 도전 조회</Button>
          <Button onClick={postTransfer}>적립금 이체</Button>
          <hr></hr>
          <h2>HABITS 관련 AXIOS 통신 테스트</h2>
          <Button onClick={() => getTotalCalendarMonth('1', '1')}>월별 총 적립금 조회</Button>
          <Button onClick={() => getTotalCalendarDay('1', '1', '1')}>일별 적립금 조회</Button>
          <Button onClick={getBuying}>구매 내역 조회</Button>
          <Button onClick={postNewHabit}>습관 등록</Button>
          <Button onClick={getProgress}>진행중인 습관 조회</Button>
          <Button onClick={putHabitEnd}>습관 종료</Button>
          <Button onClick={getHabitComplete}>완료된 습관 조회</Button>
          <Button onClick={getHabitDetail}>습관 상세 조회</Button>
          <Button onClick={() => getHabitCalendar('1', '1')}>습관 캘린더 조회</Button>
          <Button onClick={getHabitToday}>오늘의 습관 조회</Button>
          <Button onClick={postSavingToday}>오늘의 적립금 조회</Button>
          <hr></hr>
          <h2>IFBUYS 관련 AXIOS 통신 테스트</h2>
          <Button onClick={getBuyIf}>구매 내역 조회</Button>
          <Button onClick={postBuyIf}>구매 등록</Button>
          <Button onClick={getPos}>POS 조회</Button>
          <hr></hr>
          <h2>MEMBER 관련 AXIOS 통신 테스트</h2>
          <Button onClick={postJoin}>회원가입</Button>
          <Button onClick={postLogin}>로그인</Button>
          <Button onClick={postSimpleLogin}>간편 로그인</Button>
          <Button onClick={getInfo}>회원 정보 조회</Button>
          <Button onClick={putInfo}>회원 정보 수정</Button>
          <Button onClick={putPassword}>비밀번호 수정</Button>
          <Button onClick={putSimplePassword}>간편 비밀번호 수정</Button>
          <Button onClick={getSaving}>적립금 조회</Button>
          <Button onClick={deleteMember}>회원 탈퇴</Button> */}
          <hr></hr>
          <h2>TRANSATIONS 관련 AXIOS 통신 테스트</h2>
          {/* <Button onClick={getHistory}>거래 내역 조회</Button> */}
          {/* <Button onClick={getTransactionDetail}>거래 상세 조회</Button>
          <Button onClick={getTransactionReceipt}>거래 영수증 조회</Button> */}
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
