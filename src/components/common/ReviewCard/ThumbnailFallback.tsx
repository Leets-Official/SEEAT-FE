import { useState } from 'react';
import { Image } from '@/components';
import { cn } from '@/utils/cn';
import { DefaultThumbnail } from '@/assets';

interface ThumbnailFallbackProps {
  src?: string | null;
  alt?: string;
  className?: string;
  size?: number;
  rounded?: string;
}

const ThumbnailFallback = ({
  src,
  alt = '썸네일 이미지',
  className,
  size = 82,
  rounded = 'rounded-lg',
}: ThumbnailFallbackProps) => {
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        `relative flex items-center justify-center bg-gray-800`,
        `h-[${size}px] w-[${size}px]`,
        rounded,
        className,
      )}
    >
      {!src || error ? (
        <DefaultThumbnail className="h-6 w-6 text-gray-400" />
      ) : (
        <Image
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="absolute inset-0 h-full w-full rounded-lg object-cover"
        />
      )}
    </div>
  );
};

export default ThumbnailFallback;
