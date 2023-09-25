import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserStore {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;
  name : string;
  setName : (name : string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      accessToken: '',
      setAccessToken: (accessToken: string) => set({ accessToken }),
      refreshToken: '',
      setRefreshToken: (refreshToken: string) => set({ refreshToken }),
      name : '',
      setName : (name : string) => set({ name }),
    }),
    {
      name: 'user-storage', // persist key
    },
  ),
);

// fronetEnd 여러분들께 ) 스토어를 분명 세팅했는데 안 먹으면, 쿠키를 한 번 날려보시면 됩니다.
