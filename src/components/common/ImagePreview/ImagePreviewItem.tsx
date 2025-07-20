// src/components/common/ImagePreviewItem.tsx

import { CloseIcon } from '@/assets';
import { Image } from '@/components';

interface ImagePreviewItemProps {
  image: File;
  index: number;
  onRemove: (index: number) => void;
}

export default function ImagePreviewItem({ image, index, onRemove }: ImagePreviewItemProps) {
  return (
    <div className="relative h-[84px] w-[84px] shrink-0 rounded-md">
      <div className="h-full w-full overflow-hidden">
        <Image
          src={URL.createObjectURL(image)}
          alt={`preview-${index}`}
          className="z-10 h-full w-full"
          aspectRatio=""
          rounded="rounded-md"
        />
      </div>
      <button
        onClick={() => onRemove(index)}
        className="absolute -top-1.5 -right-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-red-500"
      >
        <CloseIcon className="h-2 w-2" />
      </button>
    </div>
  );
}
