import { create } from 'zustand';

export type ModalType =
  | 'confirm'
  | 'seatPicker'
  | 'action'
  | 'seatFocus'
  | 'seatWrite'
  | 'logoutConfirm' // 로그아웃 모달
  | 'withdrawalConfirm' // 회원탈퇴 모달
  | null;

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
