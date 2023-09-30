import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { useUserStore } from 'store/UserStore';

const Notification = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken, connectedAsset, isTikkleCreated, storeDate, setStoreDate } = useUserStore();

  const now = new Date();
  const cooldown = new Date(storeDate);

  const COOL_TIME = 10000;

  console.log('현재', now.getTime());
  console.log('쿨타임', cooldown.getTime());

  // 알림 쿨타임이 남았다면
  if (cooldown.getTime() > now.getTime()) {
    console.log('알림 쿨타임');
    return null;
  }

  // 알림 쿨타임이 끝났다면
  // 쿨타임 재설정
  setStoreDate(String(new Date(now.getTime() + COOL_TIME)));

  // 계좌 등록 안되었으면 계좌등록알림
  if (!connectedAsset) {
    console.log('계좌등록');
    AccountPush.fire().then((result) => {
      if (result.isConfirmed) {
        navigate('/main/mydata'); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
      }
    });
    return null;
  }

  // 적금통 생성 안했으면 적금통 생성 알림
  if (!isTikkleCreated) {
    console.log('적금통 생성');
    TikklePush.fire().then((result) => {
      if (result.isConfirmed) {
        navigate('/saving/create'); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
      }
    });
    return null;
  }

  // IF (계좌 등록 + 적금동 생성) RANDOM 알림

  // 등록 안된 영수증 조회 API ()
  // 절약 챌린지 상태 조회 API
  // 습관 저금 여부 조회 API
  // 적금통 기간 조회 API
  // 샀다치고 권유 알림
  // 소비패턴분석 알림

  return null;
};

export default Notification;

// ########################### 알림 ########################

export const AccountPush = Swal.mixin({
  // imageUrl: '/Card/before_register.png',
  // imageHeight: '50px',
  // imageWidth: '50px',
  title: '아직 등록한 계좌가 없네요.<br/> 계좌를 등록하시겠습니까?',
  toast: true,
  position: 'top',
  showConfirmButton: true,
  confirmButtonText: '등록할래요',
  confirmButtonColor: '#0067AC',
  showCancelButton: true,
  cancelButtonColor: '#f44336',
  cancelButtonText: '안 할래요',
  timer: 5000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__slideInDown',
  },
  hideClass: {
    // popup: 'animate__animated animate__hinge',
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const TikklePush = Swal.mixin({
  // imageUrl: '/Card/before_register.png',
  // imageHeight: '50px',
  // imageWidth: '50px',
  title: '현재 생선된 적금통이 없습니다.<br/> 적금통을 생성하시겠습니까?',
  toast: true,
  position: 'top',
  showConfirmButton: true,
  confirmButtonText: '생성할래요',
  confirmButtonColor: '#0067AC',
  showCancelButton: true,
  cancelButtonColor: '#f44336',
  cancelButtonText: '안 할래요',
  timer: 5000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__slideInDown',
  },
  hideClass: {
    // popup: 'animate__animated animate__hinge',
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const ChallengeCreatePush = Swal.mixin({
  //
});
export const ChallengeRecruitPush = Swal.mixin({
  //
});
export const ChallengePlayPush = Swal.mixin({
  //
});

export const EnrollReceiptPush = Swal.mixin({
  //
});

export const EnrollHabitPush = Swal.mixin({
  //
});

export const SavingDurationPush = Swal.mixin({
  //
});

export const PatternPush = Swal.mixin({
  //
});

export const BuyIfPush = Swal.mixin({
  //
});
