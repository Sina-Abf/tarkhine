import { create } from 'zustand';

interface TModal {
  branchModalVisible: boolean;
  searchModalVisible: boolean;
  actions: {
    toggleBranchModalVisible: (bool: boolean) => void;
    toggleSearchModalVisible: (bool: boolean) => void;
  };
}

const useModalStore = create<TModal>((set) => ({
  branchModalVisible: false,
  searchModalVisible: false,

  actions: {
    toggleBranchModalVisible: (bool) =>
      set((state) => ({
        branchModalVisible: (state.branchModalVisible = bool),
      })),
    toggleSearchModalVisible: (bool) =>
      set((state) => ({
        searchModalVisible: (state.searchModalVisible = bool),
      })),
  },
}));

export const useBranchModalVisible = () =>
  useModalStore((state) => state.branchModalVisible);
export const useSearchModalVisible = () =>
  useModalStore((state) => state.searchModalVisible);

export const useModalStoreActions = () =>
  useModalStore((state) => state.actions);
