import { useToastStore } from '@/store';
import { CheckIcon } from '@/assets';
import { cn } from '@/utils/cn';

const Toast = () => {
  const { isVisible, message } = useToastStore();

  return (
    <div
      className={cn(
        'fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div className="flex items-center rounded-full bg-gray-900 px-6 py-3 text-white shadow-md">
        <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800">
          <CheckIcon className="h-6 w-6" />
        </div>
        <span className="text-body-1">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
