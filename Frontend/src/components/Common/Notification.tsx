import Swal from 'sweetalert2';
import { NavigateFunction } from 'react-router-dom';
import { get } from 'http';

import axios from 'axios';

interface PushItem {
  id: string;
  push: any;
  url: string;
  weight: number;
  info?: string;
}

interface Props {
  navigate: NavigateFunction;
  accessToken: string;
  refreshToken: string;
  connectedAsset: boolean;
  createdTikkle: boolean;
  storeDate: string;
  setStoreDate: (date: string) => void;
  selectedCardId: string;
}

const Notification = async ({
  navigate,
  accessToken,
  refreshToken,
  connectedAsset,
  createdTikkle,
  storeDate,
  setStoreDate,
  selectedCardId,
}: Props) => {
  // info : 모집된 인원
  // info : 남은 소비 금액
  // info : 저금할 수 있는 습관
  // info : 남은 만기일

  const now = new Date();
  const cooldown = new Date(storeDate);

  // 쿨타임
  // 10초
  // const COOL_TIME = 10000;

  // 10분
  const COOL_TIME = 600000;

  // 1시간
  // const COOL_TIME = 3600000;

  // 알림 쿨타임이 남았다면
  if (cooldown.getTime() > now.getTime()) {
    return null;
  }

  // 알림 쿨타임이 끝났다면
  // 쿨타임 재설정
  setStoreDate(String(new Date(now.getTime() + COOL_TIME)));

  const AccountPush = (pushInfo: string): any =>
    Swal.mixin({
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

  const TikklePush = (pushInfo: string): any =>
    Swal.mixin({
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

  const ChallengeCreatePush = (pushInfo: string): any =>
    Swal.mixin({
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

  const ChallengeRecruitPush = (pushInfo: string): any =>
    Swal.mixin({
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

  const ChallengePlayPush = (pushInfo: string): any =>
    Swal.mixin({
      title: `현재 절약 챌린지 남은 금액 ${pushInfo
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원! <br/>확인하시겠습니까?`,
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

  const EnrollReceiptPush = (pushInfo: string): any =>
    Swal.mixin({
      title: '최근 등록하지 않은 영수증이 있습니다.<br/>영수증 등록 하실래요?',
      toast: true,
      position: 'top',
      showConfirmButton: true,
      confirmButtonText: '등록하기',
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

  const EnrollHabitPush = (pushInfo: string): any =>
    Swal.mixin({
      title: `오늘 저금할 수 있는 습관 ${pushInfo}개! <br/>습관 저금하실래요?`,
      // title: '습관 저금하실래요?',
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

  const SavingDurationPush = (pushInfo: string): any =>
    Swal.mixin({
      title: `현재 적금통 만기일 ${pushInfo}일 남았습니다.<br/>확인하실래요?`,
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

  const PatternPush = (pushInfo: string): any =>
    Swal.mixin({
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

  const BuyIfPush = (pushInfo: string): any =>
    Swal.mixin({
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

  // 계좌 등록 안되었으면 계좌등록알림
  if (!connectedAsset) {
    console.log('계좌등록');
    AccountPush('')
      .fire()
      .then((result: any) => {
        if (result.isConfirmed) {
          navigate('/main/mydata'); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
        }
      });
    return null;
  }

  // 적금통 생성 안했으면 적금통 생성 알림
  if (!createdTikkle) {
    console.log('적금통 생성');
    TikklePush('')
      .fire()
      .then((result: any) => {
        if (result.isConfirmed) {
          navigate('/saving/create'); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
        }
      });
    return null;
  }

  const initPush = [
    { id: 'challengeCreate', push: ChallengeCreatePush, url: '/challenge/create', weight: 1 },
    { id: 'challengeRecruit', push: ChallengeRecruitPush, url: '/challenge/recruit', weight: 1, info: '' },
    { id: 'challengePlay', push: ChallengePlayPush, url: '/challenge/play', weight: 1, info: '' },
    { id: 'EnrollRecipt', push: EnrollReceiptPush, url: '/history', weight: 1, info: '' },
    { id: 'EnrollHabit', push: EnrollHabitPush, url: '/habit', weight: 1, info: '' },
    { id: 'SavingDuration', push: SavingDurationPush, url: '/saving', weight: 1, info: '' },
    { id: 'Pattern', push: PatternPush, url: '/pattern', weight: 1 },
    { id: 'BuyIf', push: BuyIfPush, url: '/buyif', weight: 1 },
  ];

  const filtering = async (initPush: PushItem[]) => {
    const results = await Promise.all(
      initPush.map(async (pushItem) => {
        let shouldInclude = false;

        // 절약 챌린지 조회 후 필터링
        try {
          const res = await axios.get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/state`, {
            headers: {
              'ACCESS-TOKEN': accessToken,
              'REFRESH-TOKEN': refreshToken,
            },
          });

          if (res.data.response.state === 0 && pushItem.id === 'challengeCreate') {
            shouldInclude = true;
          } else if (res.data.response.state === 1 && pushItem.id === 'challengeRecruit') {
            const response = await axios.get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/state`, {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            });

            const chID = response.data.response.challengeId;
            const recruitResponse = await axios.get(
              `https://j9c211.p.ssafy.io/api/challenge-management/challenges/recruit/${chID}`,
              {
                headers: {
                  'ACCESS-TOKEN': accessToken,
                  'REFRESH-TOKEN': refreshToken,
                },
              },
            );

            pushItem.info = recruitResponse.data.response.participantNames.length;
            shouldInclude = true;
          } else if (res.data.response.state === 2 && pushItem.id === 'challengePlay') {
            const response = await axios.get(`https://j9c211.p.ssafy.io/api/challenge-management/challenges/state`, {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            });

            const chID = response.data.response.challengeId;
            const progressResponse = await axios.get(
              `https://j9c211.p.ssafy.io/api/challenge-management/challenges/progress/${chID}`,
              {
                headers: {
                  'ACCESS-TOKEN': accessToken,
                  'REFRESH-TOKEN': refreshToken,
                },
              },
            );

            pushItem.info = progressResponse.data.response.spare;
            shouldInclude = true;
          }
        } catch (err) {
          console.log(err);
        }

        // 영수증 등록 가능 여부 조회 후 true 필터
        if (pushItem.id === 'EnrollRecipt') {
          try {
            // 해당 카드 거래 내역 불러오기
            const response = await axios.get(`https://j9c211.p.ssafy.io/api/transactions/history/${selectedCardId}`, {
              params: {
                cursor: null,
                limit: 10,
              },
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            });

            console.log(response.data.response.transactionDTOList[0]);
            const DTOList = response.data.response.transactionDTOList[0];
            // 가장 최근 거래 상세내역 불러오기
            await axios
              .get(`https://j9c211.p.ssafy.io/api/transactions/${DTOList.transactionId}/receipt/`, {
                headers: {
                  'ACCESS-TOKEN': accessToken,
                  'REFRESH-TOKEN': refreshToken,
                },
              })
              .then((res) => {
                console.log(res.data.response);
                // 가장 최근 거래에 receiptList 불러오기
                if (res.data.response.receipts.length === 0) {
                  pushItem.url = `/history/detail/${DTOList.transactionId}`;
                  shouldInclude = true;
                }
              })
              .catch((err) => {
                console.log(err);
              });
          } catch (error) {
            console.error(error);
          }
        }

        // 습관 저금 등록 가능 여부 조회 후 true 필터
        if (pushItem.id === 'EnrollHabit') {
          await axios
            .get(`https://j9c211.p.ssafy.io/api/habit-management/habits/today`, {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            })
            .then((response) => {
              if (response.data.response.length > 0) {
                console.log(response.data.response.length);
                pushItem.info = response.data.response.length;
                shouldInclude = true;
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }

        // 적금통 만기 조회 후 true 필터
        if (pushItem.id === 'SavingDuration') {
          const today = new Date();
          try {
            const response = await axios.get('https://j9c211.p.ssafy.io/api/asset-management/tikkle/', {
              headers: {
                'ACCESS-TOKEN': accessToken,
                'REFRESH-TOKEN': refreshToken,
              },
            });

            const endDate = new Date(response.data.response.endDate); // 문자열을 Date 객체로 변환
            const timeDiff = endDate.getTime() - today.getTime(); // 두 날짜 간의 밀리초 단위 차이를 계산
            const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 밀리초를 일 단위로 변환

            pushItem.info = String(dayDiff); // 남은 일수를 pushItem.info에 저장
            shouldInclude = true;
          } catch (err) {
            console.log(err);
          }
        }

        // 소비패턴분석 항상 true
        if (pushItem.id === 'Pattern') {
          shouldInclude = true;
        }

        // 샀다치고 항상 true
        if (pushItem.id === 'BuyIf') {
          shouldInclude = true;
        }

        return shouldInclude;
      }),
    );
    return initPush.filter((_, index) => results[index]);
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

  getPush
    .push(getPush.info)
    .fire()
    .then((result: any) => {
      if (result.isConfirmed) {
        navigate(getPush.url); // 사용자가 확인 버튼을 클릭하면 이 경로로 이동합니다.
      }
    });
};

export default Notification;
