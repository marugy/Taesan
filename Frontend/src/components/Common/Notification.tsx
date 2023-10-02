import { useState } from 'react';
import Swal from 'sweetalert2';
import { useUserStore } from 'store/UserStore';
import { NavigateFunction } from 'react-router-dom';
import { get } from 'http';

import axios from 'axios';

interface PushItem {
  id: string;
  push: typeof Swal;
  url: string;
  weight: number;
}

interface Props {
  navigate: NavigateFunction;
  accessToken: string;
  refreshToken: string;
  connectedAsset: boolean;
  isTikkleCreated: boolean;
  storeDate: string;
  setStoreDate: (date: string) => void;
  pushInfo: string;
  setPushInfo: (date: string) => void;
}

const Notification = async ({
  navigate,
  accessToken,
  refreshToken,
  connectedAsset,
  isTikkleCreated,
  storeDate,
  setStoreDate,
  pushInfo,
  setPushInfo,
}: Props) => {
  // info : 모집된 인원
  // info : 남은 소비 금액
  // info : 저금할 수 있는 습관
  // info : 남은 만기일

  const now = new Date();
  const cooldown = new Date(storeDate);
  const COOL_TIME = 10000;

  // 알림 쿨타임이 남았다면
  if (cooldown.getTime() > now.getTime()) {
    return null;
  }

  // 알림 쿨타임이 끝났다면
  // 쿨타임 재설정
  setStoreDate(String(new Date(now.getTime() + COOL_TIME)));

  // 계좌 등록 안되었으면 계좌등록알림
  // if (!connectedAsset) {
  //   console.log('계좌등록');
  //   AccountPush.fire().then((result) => {
  //     if (result.isConfirmed) {
  //       navigate('/main/mydata'); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
  //     }
  //   });
  //   return null;
  // }

  // // 적금통 생성 안했으면 적금통 생성 알림
  // if (!isTikkleCreated) {
  //   console.log('적금통 생성');
  //   TikklePush.fire().then((result) => {
  //     if (result.isConfirmed) {
  //       navigate('/saving/create'); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
  //     }
  //   });
  //   return null;
  // }

  const ChallengeRecruitPush = Swal.mixin({
    title: `현재 절약챌린지 ${pushInfo}명을 모집했습니다!<br/>확인하시겠습니까?`,
    toast: true,
    position: 'top',
    showConfirmButton: true,
    confirmButtonText: '확인',
    confirmButtonColor: '#0067AC',
    showCancelButton: true,
    cancelButtonColor: '#f44336',
    cancelButtonText: '취소',
    timer: 5000,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__slideInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__slideOutUp',
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const ChallengePlayPush = Swal.mixin({
    title: `현재 절약 챌린지 남은 금액 ${pushInfo}원! <br/>확인하시겠습니까?`,
    toast: true,
    position: 'top',
    showConfirmButton: true,
    confirmButtonText: '확인',
    confirmButtonColor: '#0067AC',
    showCancelButton: true,
    cancelButtonColor: '#f44336',
    cancelButtonText: '취소',
    timer: 5000,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__slideInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__slideOutUp',
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const initPush = [
    { id: 'challengeCreate', push: ChallengeCreatePush, url: '/challenge/create', weight: 0 },
    { id: 'challengeRecruit', push: ChallengeRecruitPush, url: '/challenge/recruit', weight: 0 },
    { id: 'challengePlay', push: ChallengePlayPush, url: '/challenge/play', weight: 1 },
    { id: 'EnrollRecipt', push: EnrollReceiptPush, url: '/history', weight: 0 },
    { id: 'EnrollHabit', push: EnrollHabitPush, url: '/habit', weight: 0 },
    { id: 'SavingDuration', push: SavingDurationPush, url: '/saving', weight: 0 },
    { id: 'Pattern', push: PatternPush, url: '/pattern', weight: 0 },
    { id: 'BuyIf', push: BuyIfPush, url: '/buyif', weight: 0 },
  ];

  const filtering = async (initPush: PushItem[]) => {
    // 조회 가능한 알림 필터
    return initPush.filter(async (pushItem) => {
      // 챌린지 상태 조회 후 true 필터
      await axios
        .get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/state`, {
          headers: {
            'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        })
        .then(async (res) => {
          console.log('절챌 상황', res.data.response.state);
          if (res.data.response.state === 0) {
            if (pushItem.id === 'challengeCreate') {
              return true;
            }
          } else if (res.data.response.state === 1) {
            if (pushItem.id === 'challengeRecruit') {
              const response = await axios.get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/state`, {
                headers: {
                  'ACCESS-TOKEN': accessToken,
                  'REFRESH-TOKEN': refreshToken,
                },
              });
              const chID = response.data.response.challengeId;
              await axios
                .get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/recruit/${chID}`, {
                  headers: {
                    'ACCESS-TOKEN': accessToken,
                    'REFRESH-TOKEN': refreshToken,
                  },
                })
                .then((res) => {
                  setPushInfo(res.data.response.participantNames.length);
                })
                .catch((err) => {
                  console.log(err);
                });
              return true;
            }
          } else if (res.data.response.state === 2) {
            if (pushItem.id === 'challengePlay') {
              const response = await axios.get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/state`, {
                headers: {
                  'ACCESS-TOKEN': accessToken,
                  'REFRESH-TOKEN': refreshToken,
                },
              });
              const chID = response.data.response.challengeId;
              await axios
                .get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/progress/${chID}`, {
                  headers: {
                    'ACCESS-TOKEN': accessToken,
                    'REFRESH-TOKEN': refreshToken,
                  },
                })
                .then((res) => {
                  setPushInfo(res.data.response.spare);
                })
                .catch((err) => {
                  console.log(err);
                });
              return true;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // 영수증 등록 가능 여부 조회 후 true 필터
      if (pushItem.id === 'EnrollRecipt') {
        return true;
      }

      // 습관 저금 등록 가능 여부 조회 후 true 필터
      if (pushItem.id === 'EnrollHabit') {
        return true;
      }

      // 적금통 만기 조회 후 true 필터
      if (pushItem.id === 'SavingDuration') {
        return true;
      }

      // 소비패턴분석 항상 true
      if (pushItem.id === 'Pattern') {
        return true;
      }

      // 샀다치고 항상 true
      if (pushItem.id === 'BuyIf') {
        return true;
      }

      return false;
    });
  };

  const filteredPush = await filtering(initPush);

  console.log('필터링된 알림', filteredPush);

  const getRandomPush = (Pushs: PushItem[]) => {
    // 총 가중치 합계를 계산합니다.
    const totalWeight = Pushs.reduce((sum, item) => sum + item.weight, 0);

    // 0부터 totalWeight 사이의 랜덤 값을 선택합니다.
    let randomValue = Math.random() * totalWeight;

    // 선택한 랜덤 값이 어느 항목의 누적 가중치 범위에 속하는지 확인하고 해당 항목을 반환합니다.
    for (const pushItem of Pushs) {
      randomValue -= pushItem.weight;
      if (randomValue <= 0) {
        return pushItem;
      }
    }

    // 여기까지 왔다면 배열의 마지막 항목을 반환합니다 (이 부분에 도달하는 일은 거의 없습니다).
    return Pushs[Pushs.length - 1];
  };

  const getPush = getRandomPush(filteredPush);

  getPush.push.fire().then((result) => {
    if (result.isConfirmed) {
      navigate(getPush.url); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
    }
  });
};

export default Notification;

// ########################### 알림 ########################

export const AccountPush = Swal.mixin({
  // imageUrl: '/Card/before_register.png',
  // imageHeight: '50px',
  // imageWidth: '50px',
  title: '아직 등록한 계좌가 없습니다.<br/>계좌를 등록하시겠습니까?',
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
  title: '현재 생성된 적금통이 없습니다.<br/>적금통을 생성하시겠습니까?',
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
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const ChallengeCreatePush = Swal.mixin({
  title: '절약 챌린지에 한 번 도전해보실래요?',
  toast: true,
  position: 'top',
  showConfirmButton: true,
  confirmButtonText: '도전할래요!',
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
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

// export const ChallengeRecruitPush = Swal.mixin({
//   title: `현재 절약챌린지 ${pushInfo}명을 모집했습니다!<br/>확인하시겠습니까?`,
//   toast: true,
//   position: 'top',
//   showConfirmButton: true,
//   confirmButtonText: '확인',
//   confirmButtonColor: '#0067AC',
//   showCancelButton: true,
//   cancelButtonColor: '#f44336',
//   cancelButtonText: '취소',
//   timer: 5000,
//   timerProgressBar: true,
//   showClass: {
//     popup: 'animate__animated animate__slideInDown',
//   },
//   hideClass: {
//     popup: 'animate__animated animate__slideOutUp',
//   },
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer);
//     toast.addEventListener('mouseleave', Swal.resumeTimer);
//   },
// });

// export const ChallengePlayPush = Swal.mixin({
//   title: '진행중인 절약 챌린지 $challengeState.spare원 남았습니다!<br/>확인하시겠습니까?',
//   toast: true,
//   position: 'top',
//   showConfirmButton: true,
//   confirmButtonText: '확인',
//   confirmButtonColor: '#0067AC',
//   showCancelButton: true,
//   cancelButtonColor: '#f44336',
//   cancelButtonText: '취소',
//   timer: 5000,
//   timerProgressBar: true,
//   showClass: {
//     popup: 'animate__animated animate__slideInDown',
//   },
//   hideClass: {
//     popup: 'animate__animated animate__slideOutUp',
//   },
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer);
//     toast.addEventListener('mouseleave', Swal.resumeTimer);
//   },
// });

export const EnrollReceiptPush = Swal.mixin({
  title: '최근 등록하지 않은 영수증이 있습니다.<br/>영수증 등록 하실래요?',
  toast: true,
  position: 'top',
  showConfirmButton: true,
  confirmButtonText: '확인',
  confirmButtonColor: '#0067AC',
  showCancelButton: true,
  cancelButtonColor: '#f44336',
  cancelButtonText: '취소',
  timer: 5000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__slideInDown',
  },
  hideClass: {
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const EnrollHabitPush = Swal.mixin({
  title: '오늘 저금하지 않은 습관이 있습니다.<br/>습관 저금하실래요?',
  toast: true,
  position: 'top',
  showConfirmButton: true,
  confirmButtonText: '확인',
  confirmButtonColor: '#0067AC',
  showCancelButton: true,
  cancelButtonColor: '#f44336',
  cancelButtonText: '취소',
  timer: 5000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__slideInDown',
  },
  hideClass: {
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const SavingDurationPush = Swal.mixin({
  title: '현재 적금통 만기일 $duration 남았습니다.<br/>확인하실래요?',
  toast: true,
  position: 'top',
  showConfirmButton: true,
  confirmButtonText: '확인',
  confirmButtonColor: '#0067AC',
  showCancelButton: true,
  cancelButtonColor: '#f44336',
  cancelButtonText: '취소',
  timer: 5000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__slideInDown',
  },
  hideClass: {
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const PatternPush = Swal.mixin({
  title: '현재까지 소비 패턴을 확인하실래요?',
  toast: true,
  position: 'top',
  showConfirmButton: true,
  confirmButtonText: '확인',
  confirmButtonColor: '#0067AC',
  showCancelButton: true,
  cancelButtonColor: '#f44336',
  cancelButtonText: '취소',
  timer: 5000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__slideInDown',
  },
  hideClass: {
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const BuyIfPush = Swal.mixin({
  title: '사고싶은 물품이 있으신가요?<br/>혹시 샀다치고 저금하실래요?',
  toast: true,
  position: 'top',
  showConfirmButton: true,
  confirmButtonText: '확인',
  confirmButtonColor: '#0067AC',
  showCancelButton: true,
  cancelButtonColor: '#f44336',
  cancelButtonText: '취소',
  timer: 5000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__slideInDown',
  },
  hideClass: {
    popup: 'animate__animated animate__slideOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
