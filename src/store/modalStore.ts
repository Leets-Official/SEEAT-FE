import { create } from 'zustand';
import type {
  ConfirmModalProps,
  SeatPickerModalProps,
} from '@/components/common/Modal/Modal.types';

type ModalType = keyof ModalPropsMap; // 'confirm' | 'seatPicker'

type ModalPropsMap = {
  confirm: ConfirmModalProps;
  seatPicker: SeatPickerModalProps;
};

type ModalProps<T extends ModalType = ModalType> = T extends ModalType ? ModalPropsMap[T] : never;

type ModalState = {
  isOpen: boolean;
  modalType: ModalType | null;
  modalProps: ModalProps;
  openModal: <T extends ModalType>(type: T, props: ModalPropsMap[T]) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {} as any,
  openModal: (type, props) => set({ isOpen: true, modalType: type, modalProps: props }),
  closeModal: () => set({ isOpen: false, modalType: null, modalProps: {} as any }),
}));
