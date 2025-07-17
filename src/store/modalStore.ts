import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  modalType: 'confirm' | 'custom' | null;
  modalProps: {
  title?: string;
  subtitle?: string;
  subWarningText?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  };
  openModal: (
    type: ModalState['modalType'],
    props: ModalState['modalProps']
  ) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {},
  openModal: (type, props) =>
    set({ isOpen: true, modalType: type, modalProps: props }),
  closeModal: () =>
    set({ isOpen: false, modalType: null, modalProps: {} }),
}));
