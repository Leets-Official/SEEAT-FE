import { create } from 'zustand';

type BaseModalProps = {
  title?: string;
  subtitle?: string;
  subWarningText?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

type ModalPropsMap = {
  confirm: BaseModalProps;
  custom: BaseModalProps;
  seatPicker: {
    theaterType: 'IMAX' | 'Dolby Cinema';
    theaterName: string;
    auditoriumId: string;
  };
};

type ModalType = keyof ModalPropsMap;
type ModalProps<T extends ModalType = ModalType> = ModalPropsMap[T];

interface ModalState<T extends ModalType = ModalType> {
  isOpen: boolean;
  modalType: T | null;
  modalProps: T extends ModalType ? ModalProps<T> : never;
  openModal: <K extends ModalType>(type: K, props: ModalProps<K>) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {} as any,
  openModal: (type, props) => set({ isOpen: true, modalType: type, modalProps: props }),
  closeModal: () => set({ isOpen: false, modalType: null, modalProps: {} as any }),
}));
