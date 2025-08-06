import { useState } from 'react';
import { cn } from '@/utils/cn';
import { Image } from '@/components'; // 커스텀 Image 컴포넌트 (IntersectionObserver 등 내장)
import { DefaultProfile } from '@/assets';


interface ProfileImageWithFallbackProps {
  src?: string | null;
  alt?: string;
  size?: number;
  className?: string;
}

const ProfileImageWithFallback = ({
  src,
  alt = '프로필 이미지',
  size = 40,
  className,
}: ProfileImageWithFallbackProps) => {
  const [error, setError] = useState(false);
  const resolvedSrc = !src || error ? undefined : src;

  return (
    <div
      className={cn(
        `overflow-hidden rounded-full border border-gray-500 bg-gray-950`,
        `w-[${size}px] h-[${size}px]`,
        className,
      )}
    >
      {resolvedSrc ? (
        <Image
          src={resolvedSrc}
          alt={alt}
          onError={() => setError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <DefaultProfile className="h-full w-full p-1" />
      )}
    </div>
  );
};

export default ProfileImageWithFallback;
