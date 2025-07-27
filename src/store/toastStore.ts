import { create } from 'zustand';

interface ToastState {
  message: string;
  isVisible: boolean;
  show: (message: string, duration?: number) => void;
  hide: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  message: '',
  isVisible: false,
  show: (message, duration = 1000) => {
    set({ message, isVisible: true });
    setTimeout(() => set({ isVisible: false }), duration);
  },
  hide: () => set({ isVisible: false }),
}));
