import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserStore {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;

  name: string;
  setName: (name: string) => void;
  userId: string;
  setUserId: (userId: string) => void;

  // 임시 테스트용 store
  connectedAsset: boolean;
  setConnectedAsset: (connectedAsset: boolean) => void;
  isTikkleCreated: boolean;
  setIsTikkleCreated: (isTikkleCreated: boolean) => void;

  // 알림 여부
  isNotify: boolean;
  setIsNotify: (isNotify: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      accessToken: '',
      setAccessToken: (accessToken: string) => set({ accessToken }),
      refreshToken: '',
      setRefreshToken: (refreshToken: string) => set({ refreshToken }),

      name: '',
      setName: (name: string) => set({ name }),
      connectedAsset: false,
      setConnectedAsset: (connectedAsset: boolean) => set({ connectedAsset }),

      isTikkleCreated: false,
      setIsTikkleCreated: (isTikkleCreated: boolean) => set({ isTikkleCreated }),

      isNotify: false,
      setIsNotify: (isNotify: boolean) => {
        if (isNotify) {
          // isNotify를 true로 설정
          set({ isNotify: true });

          // 1시간 마다 알림 isNotify를 false로 자동 설정 ()
          // 1시간 3600000 / 30분 1800000
          setTimeout(() => {
            set({ isNotify: false });
          }, 10000);
        }
      },

      userId: '',
      setUserId: (userId: string) => set({ userId }),
    }),
    {
      name: 'user-storage', // persist key
    },
  ),
);

// fronetEnd 여러분들께 ) 스토어를 분명 세팅했는데 안 먹으면, 쿠키를 한 번 날려보시면 됩니다.
