export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  cancelText?: string; 
  confirmText?: string; 
  children?: React.ReactNode;

  title?: string;
  subtitle?: string;
  subWarningText?: string;
}