import { CloseIcon } from '@/assets';
import { Image } from '@/components';
import type { ButtonRounded } from '@/components/common/Button';

interface ImagePreviewItemProps {
  previewUrl: string;
  index: number;
  rounded?: ButtonRounded;
  closeButton?: boolean;
  onRemove?: (index: number) => void;
}

export default function ImagePreviewItem({
  previewUrl,
  index,
  rounded = 'md',
  closeButton = true,
  onRemove,
}: ImagePreviewItemProps) {
  const roundedClass = rounded === 'full' ? 'rounded-full' : 'rounded-md';

  return (
    <div className={`relative h-[84px] w-[84px] shrink-0 overflow-hidden ${roundedClass}`}>
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
          className="absolute -top-1.5 -right-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-red-500"
        >
          <CloseIcon className="h-2 w-2" />
        </button>
      )}
    </div>
  );
}
