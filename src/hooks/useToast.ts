import { useToastStore } from '@/store/toastStore';

export const useToast = () => {
  return useToastStore((state) => state.show);
};
