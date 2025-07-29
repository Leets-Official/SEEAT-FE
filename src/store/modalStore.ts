import { create } from 'zustand';

export type ModalType = 'confirm' | 'seatPicker' | null;

interface ModalState {
  isOpen: boolean;
  modalType: ModalType;
  openModal: (type: Exclude<ModalType, null>) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  openModal: (type) =>
    set({
      isOpen: true,
      modalType: type,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      modalType: null,
    }),
}));
