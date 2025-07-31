export interface ConfirmModalProps {
  title?: string;
  subtitle?: string;
  subWarningText?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
}
export interface SeatPickerModalProps {
  theaterType: 'IMAX' | 'Dolby Cinema';
  theaterName: string;
  auditoriumId: string;
}