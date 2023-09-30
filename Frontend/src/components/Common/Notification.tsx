import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useUserStore } from 'store/UserStore';

export const Notification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    accessToken,
    refreshToken,
    setName,
    connectedAsset,
    setConnectedAsset,
    isNotify,
    setIsNotify,
    isTikkleCreated,
  } = useUserStore();

  // 알림 여부
  console.log('알림이 울렸니?', isNotify);
  // 메인 페이지이면서 알림 쿨탐이 돌았을 때만
  console.log('계좌등록여부', connectedAsset, '적금통생성여부', isTikkleCreated);
  if (location.pathname === '/main' && isNotify === false) {
    setIsNotify(true);
    // 계좌등록 여부
    if (!connectedAsset) {
      AccountPush.fire().then((result) => {
        console.log(isNotify);
        if (result.isConfirmed) {
          navigate('/main/mydata'); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
        }
      });
    } else {
      // 적금통 생성 여부
      if (!isTikkleCreated) {
        TikklePush.fire().then((result) => {
          console.log(isNotify);
          if (result.isConfirmed) {
            navigate('/saving/create'); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
          }
        });
      } else {
        // IF (계좌 등록 + 적금동 생성)
        // RANDOM
        // 영수증 등록 가능한 결제 내역 조회 API 0.4
        // 절약 챌린지 남은 금액 조회 API 0.15
        // 습관 저금 저금 가능한 내역 조회 API 0.15
        // 샀다 치고 이동 0.15
        // 소비 패턴 분석 이동 0.15
      }
    }
  }
};

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
