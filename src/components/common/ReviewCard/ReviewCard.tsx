import clsx from 'clsx';
import HeartOn from '@/assets/icons/heart_on.svg?react';
interface ReviewCardProps {
  imageUrl: string;
  tags: string[];
  title: string;
  description?: string;
  likeCount: number;
  onClick?: () => void;
}

export default function ReviewCard({
  imageUrl,
  tags,
  title,
  description,
  likeCount,
  onClick,
}: ReviewCardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex h-[90px] w-full items-center gap-3 rounded-[12px] p-1 transition-colors',
        'bg-gray-900 hover:bg-[#424242] active:bg-gray-950',
        'cursor-pointer',
      )}
    >
      {/*썸네일*/}
      <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-lg bg-gray-600">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        <div className="text-caption-3 absolute right-1 bottom-1 flex items-center gap-1 rounded-full border border-gray-500 bg-[rgba(66,66,66,0.3)] px-1 text-white">
          <span>
            <HeartOn className="h-[12px] w-[12px]" />
          </span>
          <span>{likeCount}</span>
        </div>
      </div>

      {/*텍스트*/}
      <div className="flex flex-col overflow-hidden">
        {/*태그*/}
        <div className="flex gap-[10px] py-[4px]">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-caption-2 shrink-0 rounded-full border border-red-300 bg-[rgba(255,122,130,0.3)] px-2 text-white"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/*제목*/}
        <div className="text-title-4 truncate">{title}</div>

        {/*내용*/}
        {description && <div className="text-caption-3 truncate text-gray-500">{description}</div>}
      </div>
    </div>
  );
}
