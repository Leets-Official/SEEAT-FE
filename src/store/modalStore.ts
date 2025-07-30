import { create } from 'zustand';

export type ModalType = 'confirm' | 'seatPicker' | null;

interface ModalStore {
  modalType: ModalType;
  openModal: (type: Exclude<ModalType, null>) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalType: null,
  openModal: (type) => set({ modalType: type }),
  closeModal: () => set({ modalType: null }),
}));
