import type { BadgeProps } from './Badge.types';
import { cn } from '@/utils/cn';
import { CloseIcon } from '@/assets';

export default function Badge({ type, size = 'sm', children, onRemove, className }: BadgeProps) {
  const baseClass = 'inline-flex items-center justify-center whitespace-nowrap gap-1';

  const typeClass = {
    tag: {
      sm: 'bg-red-300/30 text-white border border-red-300 rounded-full px-2 py-0.2',
      md: 'bg-red-300/30 text-white border border-red-300 rounded-full px-3 py-1',
    },
    info: 'bg-gray-800 text-white rounded-lg px-5 py-1',
    removable: 'bg-gray-800/30 text-gray-300 border border-gray-500 rounded-lg px-3 py-1',
  } as const;

  const sizeClass =
    type === 'tag'
      ? size === 'sm'
        ? 'text-caption-2'
        : 'text-caption-1'
      : type === 'info'
        ? 'text-caption-1'
        : 'text-caption-2';

  const selectedClass =
    type === 'tag' ? typeClass.tag[size] : typeClass[type as 'info' | 'removable'];

  const displayText = type === 'tag' ? `#${children}` : children;

  return (
    <div className={cn(baseClass, selectedClass, sizeClass, className)}>
      {displayText}
      {type === 'removable' && (
        <button className="ml-2" onClick={onRemove}>
          <CloseIcon width={9} height={9} />
        </button>
      )}
    </div>
  );
}
