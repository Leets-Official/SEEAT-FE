import { create } from 'zustand';

export interface ModalProps {
  title?: string;
  subtitle?: string;
  subWarningText?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

interface ModalState {
  isOpen: boolean;
  modalType: 'confirm' | 'custom' | null;
  modalProps: ModalProps;
  openModal: (props: ModalProps, type?: ModalState['modalType']) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {},
   openModal: (props, type = 'confirm') => {
    set({ isOpen: true, modalType: type, modalProps: props });
  },
  closeModal: () =>
    set({ isOpen: false, modalType: null, modalProps: {} }),
}));
