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
  createdTikkle: boolean;
  setCreatedTikkle: (createdTikkle: boolean) => void;

  // 알림 여부
  storeDate: string;
  setStoreDate: (storeDate: string) => void;
  pushInfo: string;
  setPushInfo: (pushInfo: string) => void;
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

      createdTikkle: false,
      setCreatedTikkle: (createdTikkle: boolean) => set({ createdTikkle }),

      userId: '',
      setUserId: (userId: string) => set({ userId }),

      storeDate: '',
      setStoreDate: (storeDate: string) => set({ storeDate }),
      pushInfo: '',
      setPushInfo: (pushInfo: string) => set({ pushInfo }),
    }),
    {
      name: 'user-storage', // persist key
    },
  ),
);

// fronetEnd 여러분들께 ) 스토어를 분명 세팅했는데 안 먹으면, 쿠키를 한 번 날려보시면 됩니다.
