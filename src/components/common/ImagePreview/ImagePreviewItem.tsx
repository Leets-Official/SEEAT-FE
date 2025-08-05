import { CloseIcon } from '@/assets';
import { Image } from '@/components';
import type { ButtonRounded } from '@/components/common/Button';

interface ImagePreviewItemProps {
  previewUrl: string;
  index: number;
  rounded?: ButtonRounded;
  size?: number;
  closeButton?: boolean;
  onRemove?: (index: number) => void;
  onClick?: () => void;
}

export default function ImagePreviewItem({
  previewUrl,
  index,
  rounded = 'md',
  size = 84,
  onClick,
  closeButton = true,
  onRemove,
}: ImagePreviewItemProps) {
  const roundedClass = rounded === 'full' ? 'rounded-full' : 'rounded-md';
  const cursorClass = onClick ? 'cursor-pointer' : '';
  const dimensionClass = `w-[${size}px] h-[${size}px]`;

  return (
    <div
      className={`relative shrink-0 ${roundedClass} ${cursorClass} ${dimensionClass}`}
      onClick={onClick}
    >
      <Image
        src={previewUrl}
        alt={`preview-${index}`}
        className="z-10 h-full w-full"
        aspectRatio=""
        rounded={roundedClass}
      />
      {closeButton && onRemove && (
        <button
          onClick={() => onRemove(index)}
          className="absolute -top-1.5 -right-1.5 z-10 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-red-500"
        >
          <CloseIcon className="h-2 w-2" />
        </button>
      )}
    </div>
  );
}
