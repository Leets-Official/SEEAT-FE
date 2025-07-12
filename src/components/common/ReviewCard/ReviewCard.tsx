import clsx from 'clsx';

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
        <div className="text-caption-4 absolute right-1 bottom-1 rounded-full bg-white/30 px-2 py-[2px] text-white">
          {likeCount}
        </div>
      </div>

      {/*텍스트*/}
      <div className="flex flex-col gap-1 overflow-hidden">
        {/*태그*/}
        <div className="flex flex-wrap gap-[10px]">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-caption-2 rounded-full border border-red-300 bg-[rgba(255,122,130,0.3)] px-2 text-white"
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
