import { create } from 'zustand';
import type { ConfirmModalProps, SeatPickerModalProps } from '@/components/common/Modal/Modal.types';

type ModalPropsMap = {
  confirm: ConfirmModalProps;
  seatPicker: SeatPickerModalProps;
};

type ModalType = keyof ModalPropsMap;

interface ModalState {
  isOpen: boolean;
  modalType: ModalType | null;
  modalProps: ModalPropsMap[ModalType] | null;
  openModal: <T extends ModalType>(type: T, props: ModalPropsMap[T]) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: null,
  openModal: (type, props) => {
    set({ isOpen: true, modalType: type, modalProps: props });
  },
  closeModal: () => {
    set({ isOpen: false, modalType: null, modalProps: null });
  },
}));