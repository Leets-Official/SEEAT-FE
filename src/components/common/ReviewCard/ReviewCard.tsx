import { cn } from '@/utils/cn';
import { HeartOn } from '@/assets';
import { Badge, Image } from '@/components';

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
      className={cn(
        'flex h-[90px] w-full items-center gap-3 rounded-[12px] p-1 transition-colors',
        'bg-gray-900 hover:bg-gray-800 active:bg-gray-950',
        'cursor-pointer',
      )}
    >
      {/*썸네일*/}
      <div className="relative h-[82px] w-[82px] shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          aspectRatio="h-[82px] w-[82px]"
          rounded="rounded-lg"
          className="bg-gray-600"
        />
        <div className="text-caption-3 absolute right-1 bottom-1 flex items-center gap-1 rounded-full border border-gray-500 bg-[rgba(66,66,66,0.3)] pr-[6px] pl-1 text-white">
          <span>
            <HeartOn className="h-4 w-4" />
          </span>
          <span>{likeCount}</span>
        </div>
      </div>

      {/*텍스트*/}
      <div className="flex flex-col overflow-hidden">
        {/*태그*/}
        <div className="flex gap-[10px] py-[4px]">
          {tags.slice(0, 3).map((tag, i) => (
            <Badge key={i} type="tag" size="sm">
              {tag}
            </Badge>
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
