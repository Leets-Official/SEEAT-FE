import { useToastStore } from '@/store';
import { CheckIcon } from '@/assets';
import { cn } from '@/utils/cn';

const Toast = () => {
  const { isVisible, message } = useToastStore();

  return (
    <div
      className={cn(
        'fixed top-20 left-0 z-50 w-full px-4 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div className="flex items-center rounded-full bg-gray-800 py-1 pr-3 pl-2">
        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
          <CheckIcon className="h-6 w-6" />
        </div>
        <span className="text-body-1 whitespace-nowrap">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
