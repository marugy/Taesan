import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AssetStore {
  selectedCardId: string;
  setSelectedCardId: (name: string) => void;
}

export const useAssetStore = create<AssetStore>()(
  persist(
    (set) => ({
      selectedCardId: '',
      setSelectedCardId: (selectedCardId: string) => set({ selectedCardId }),
    }),
    {
      name: 'asset-storage', // persist key
    },
  ),
);

// fronetEnd 여러분들께 ) 스토어를 분명 세팅했는데 안 먹으면, 쿠키를 한 번 날려보시면 됩니다.
